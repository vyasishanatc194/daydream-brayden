import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isBs3 } from 'ngx-bootstrap/utils';
import { ApiService } from 'src/app/services/API/api.service';

@Component({
	selector: 'app-topics',
	templateUrl: './topics.component.html',
	styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
	topics: string[] = [];
	isBs3 = isBs3();
	selected: string;
	@Input() parent: FormGroup;

	constructor(public api: ApiService) {}

	ngOnInit(): void {
		this.getTopics();
	}

	// get topics data from api
	getTopics() {
		this.api
			.getData('topics', null)
			.toPromise()
			.then((res) => {
				this.topics = res.map(function (a) {
					return a.title;
				});
			});
	}
}
