import { Component, Input, OnInit } from '@angular/core';
import {
	ControlContainer,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup
} from '@angular/forms';

@Component({
	selector: 'app-checkbox-group',
	templateUrl: './checkbox-group.component.html',
	styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
	@Input() name: string;
	@Input() id: string;
	@Input() data: string;
	@Input() checkeds: string;
	searchform: FormGroup;

	constructor(
		private fb: FormBuilder,
		private controlContainer: ControlContainer
	) {}

	ngOnInit(): void {
		this.searchform = <FormGroup>this.controlContainer.control;
	}

	onCheckboxChange(e) {
		const checkArray: FormArray = this.searchform.get(this.name) as FormArray;

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
	}
}
