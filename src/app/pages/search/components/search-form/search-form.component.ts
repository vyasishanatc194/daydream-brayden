import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormArray,
	FormControl,
	Validators
} from '@angular/forms';
import { ApiService } from 'src/app/services/API/api.service';

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
				this.browsers = res.filter((b) => b.type === 'operatingSystem');
				this.operatingSystems = res.filter((os) => os.type === 'browser');
			});
	}

	// on click toggle left side search bar
	searchStatus: boolean = false;
	searchToggel() {
		this.searchStatus = !this.searchStatus;
		this.searchToggleEvent.emit(this.searchStatus);
	}

	// on select all hardware get values and check all checkboxes
	checkHardware = false;
	selectAllHardware(e) {
		const hardArr: FormArray = this.searchform.get(
			'hardwareArray'
		) as FormArray;
		if (e.target.checked == true) {
			this.browsers.map(function (a) {
				hardArr.push(new FormControl(a.title));
			});
			this.operatingSystems.map(function (a) {
				hardArr.push(new FormControl(a.title));
			});
			this.checkHardware = true;
		} else {
			hardArr.clear();
			this.checkHardware = false;
		}
		this.filterArray();
	}

	// on select all language get values and check all checkboxes
	checkLanguage = false;
	selectAllLanguage(e) {
		const langArr: FormArray = this.searchform.get(
			'languageArray'
		) as FormArray;
		if (e.target.checked == true) {
			this.languages.map(function (a) {
				langArr.push(new FormControl(a.name));
				return a.name;
			});
			this.checkLanguage = true;
		} else {
			langArr.clear();
			this.checkLanguage = false;
		}
		this.filterArray();
	}

	// on select all audience get values and check all checkboxes
	checkAudience = false;
	selectAllAudience(e) {
		const audArr: FormArray = this.searchform.get(
			'audienceTypeArray'
		) as FormArray;
		if (e.target.checked == true) {
			this.formalAudienceTypes.map(function (a) {
				audArr.push(new FormControl(a.title));
				return a.title;
			});
			this.inFormalAudienceTypes.map(function (a) {
				audArr.push(new FormControl(a.title));
				return a.title;
			});
			this.checkAudience = true;
		} else {
			audArr.clear();
			this.checkAudience = false;
		}
		this.filterArray();
	}

	// on select all created by get values and check all checkboxes
	checkCreateby = false;
	selectAllCreateby(e) {
		if (e.target.checked == true) {
			this.checkCreateby = true;
		} else {
			this.checkCreateby = false;
		}
	}

	filterArray() {
		console.log(this.searchform.value);
		// passing filter object to API
	}
}
