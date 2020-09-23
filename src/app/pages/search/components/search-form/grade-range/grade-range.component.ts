import { Component, Input, OnInit } from '@angular/core';
import {
	ControlContainer,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup
} from '@angular/forms';

@Component({
	selector: 'app-grade-range',
	templateUrl: './grade-range.component.html',
	styleUrls: ['./grade-range.component.scss']
})
export class GradeRangeComponent implements OnInit {
	@Input() name: string;
	searchform: FormGroup;

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

	constructor(
		private fb: FormBuilder,
		private controlContainer: ControlContainer
	) {}

	ngOnInit(): void {
		this.searchform = <FormGroup>this.controlContainer.control;
	}

	onGradeChange(e) {
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
