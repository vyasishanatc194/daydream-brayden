import {
	Component,
	OnInit,
	EventEmitter,
	Output,
	Input,
	ElementRef,
	ViewChild
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormArray,
	FormControl,
	Validators
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { isBs3 } from 'ngx-bootstrap/utils';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
	@Output() searchToggleEvent = new EventEmitter<boolean>();
	languages: any;
	formalAudienceTypes: any[] = [];
	inFormalAudienceTypes: any[] = [];
	browsers: any[] = [];
	operatingSystems: any[] = [];
	isBs3 = isBs3();
	selected: string;
	@ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;

	public explorings = [
		{
			name: 'Collection',
			value: 'Collection'
		},
		{
			name: 'Lesson',
			value: 'Lesson'
		},
		{
			name: 'Visualizations',
			value: 'Visualizations'
		}
	];

	public createdBys = [
		{
			name: 'Infiniscope',
			value: 'Infiniscope'
		},
		{
			name: 'Collaboration',
			value: 'Collaboration'
		},
		{
			name: 'Advisory',
			value: 'Advisory'
		},
		{
			name: 'Member',
			value: 'Member'
		}
	];

	public gradeRanges = [
		{
			name: 'K - 4',
			value: 'K - 4'
		},
		{
			name: '5 - 8',
			value: '5 - 8'
		},
		{
			name: '9 - 12',
			value: '9 - 12'
		},
		{
			name: '13+',
			value: '13+'
		}
	];

	public mostPopulars = [
		{
			name: 'Tag A',
			value: 'Tag A'
		},
		{
			name: 'Tag B',
			value: 'Tag B'
		},
		{
			name: 'Tag C',
			value: 'Tag C'
		},
		{
			name: 'Tag D',
			value: 'Tag D'
		},
		{
			name: 'Tag E',
			value: 'Tag E'
		}
	];

	topics: string[] = [];

	searchform: FormGroup;
	constructor(public api: ApiService, private fb: FormBuilder) {
		this.searchform = this.fb.group({
			checkArray: this.fb.array([], [Validators.required]),
			languageArray: this.fb.array([], [Validators.required]),
			audienceTypeArray: this.fb.array([], [Validators.required]),
			hardwareArray: this.fb.array([], [Validators.required]),
			exploringArray: this.fb.array([], [Validators.required]),
			gradeRangeArray: this.fb.array([], [Validators.required]),
			searchTopic: new FormControl()
		});
	}

	ngOnInit(): void {
		this.getLanguages();
		this.getAudienceTypes();
		this.getHardwares();
		this.getTopics();
	}

	// get languages data from api
	getLanguages() {
		this.api
			.getData('languages', null)
			.toPromise()
			.then((res) => {
				this.languages = res;
			});
	}

	// get audience type data from api
	getAudienceTypes() {
		this.api
			.getData('audience-types', null)
			.toPromise()
			.then((res) => {
				this.formalAudienceTypes = res.filter((formal) => formal.formal);
				this.inFormalAudienceTypes = res.filter((informal) => !informal.formal);
			});
	}

	// get hardware data from api
	getHardwares() {
		this.api
			.getData('hardwares', null)
			.toPromise()
			.then((res) => {
				this.browsers = res.filter((b) => b.type == 'operatingSystem');
				this.operatingSystems = res.filter((os) => os.type == 'browser');
			});
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

	// on click toggle left side search bar
	searchStatus: boolean = false;
	searchToggel() {
		this.searchStatus = !this.searchStatus;
		this.searchToggleEvent.emit(this.searchStatus);
	}

	checkHardware = false;
	selectAllHardware(e) {
		if (e.target.checked == true) {
			this.checkHardware = true;
		} else {
			this.checkHardware = false;
		}
	}

	checkLanguage = false;
	selectAllLanguage(e) {
		if (e.target.checked == true) {
			this.checkLanguage = true;
		} else {
			this.checkLanguage = false;
		}
	}

	checkAudience = false;
	selectAllAudience(e) {
		if (e.target.checked == true) {
			this.checkAudience = true;
		} else {
			this.checkAudience = false;
		}
	}

	checkCreateby = false;
	selectAllCreateby(e) {
		if (e.target.checked == true) {
			this.checkCreateby = true;
		} else {
			this.checkCreateby = false;
		}
		// let el: HTMLElement = this.myDiv.nativeElement;
	}

	// show all/less tags on click
	tagsShow: boolean = false;
	showAll() {
		this.tagsShow = !this.tagsShow;
	}

	// get checked value of created by on checkbox checked
	onCreatedByChange(e) {
		const checkArray: FormArray = this.searchform.get(
			'checkArray'
		) as FormArray;

		if (e.target.checked) {
			checkArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			checkArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					checkArray.removeAt(i);
					return;
				}
				i++;
			});
		}
		console.log(this.searchform.value.checkArray);
	}

	// get checked value of languages on checkbox checked
	onLanguageChange(e) {
		const languageArray: FormArray = this.searchform.get(
			'languageArray'
		) as FormArray;

		if (e.target.checked) {
			languageArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			languageArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					languageArray.removeAt(i);
					return;
				}
				i++;
			});
		}
		console.log(this.searchform.value);
	}

	// get checked value of Hardwares on checkbox checked
	onHardwareChange(e) {
		const hardwareArray: FormArray = this.searchform.get(
			'hardwareArray'
		) as FormArray;

		if (e.target.checked) {
			hardwareArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			hardwareArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					hardwareArray.removeAt(i);
					return;
				}
				i++;
			});
		}
		console.log(this.searchform.value);
	}

	// get checked value of audiences on checkbox checked
	onAudienceTypeChange(e) {
		const audienceTypeArray: FormArray = this.searchform.get(
			'audienceTypeArray'
		) as FormArray;

		if (e.target.checked) {
			audienceTypeArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			audienceTypeArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					audienceTypeArray.removeAt(i);
					return;
				}
				i++;
			});
		}
		console.log(this.searchform.value);
	}

	// get checked value of explorings on checkbox checked
	onExploringChange(e) {
		const exploringArray: FormArray = this.searchform.get(
			'exploringArray'
		) as FormArray;

		if (e.target.checked) {
			exploringArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			exploringArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					exploringArray.removeAt(i);
					return;
				}
				i++;
			});
		}
		console.log(this.searchform.value);
	}

	onGradeRangeChange(e) {
		const exploringArray: FormArray = this.searchform.get(
			'exploringArray'
		) as FormArray;

		if (e.target.checked) {
			exploringArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			exploringArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					exploringArray.removeAt(i);
					return;
				}
				i++;
			});
		}
		console.log(this.searchform.value);
	}

	// toggle most popular tags class
	activateClass(popular) {
		popular.active = !popular.active;
	}
}
