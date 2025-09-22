define("UsrYatchRentalFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYatchRentalDS_UsrStartDate_tarzw4o",
					"labelPosition": "above",
					"control": "$UsrYatchRentalDS_UsrStartDate_tarzw4o"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYatchRentalDS_UsrEndDate_8074yaz",
					"labelPosition": "above",
					"control": "$UsrYatchRentalDS_UsrEndDate_8074yaz"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Customer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYatchRentalDS_UsrCustomer_1m38uap",
					"labelPosition": "above",
					"control": "$UsrYatchRentalDS_UsrCustomer_1m38uap",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TotalAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYatchRentalDS_UsrAmount_f3kjp6r",
					"labelPosition": "above",
					"control": "$UsrYatchRentalDS_UsrAmount_f3kjp6r"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrYatchRentalDS_UsrComment_ii6dv9c",
					"labelPosition": "above",
					"control": "$UsrYatchRentalDS_UsrComment_ii6dv9c"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYatchRentalDS_UsrStartDate_tarzw4o": {
						"modelConfig": {
							"path": "UsrYatchRentalDS.UsrStartDate"
						}
					},
					"UsrYatchRentalDS_UsrEndDate_8074yaz": {
						"modelConfig": {
							"path": "UsrYatchRentalDS.UsrEndDate"
						}
					},
					"UsrYatchRentalDS_UsrCustomer_1m38uap": {
						"modelConfig": {
							"path": "UsrYatchRentalDS.UsrCustomer"
						}
					},
					"UsrYatchRentalDS_UsrComment_ii6dv9c": {
						"modelConfig": {
							"path": "UsrYatchRentalDS.UsrComment"
						}
					},
					"UsrYatchRentalDS_UsrAmount_f3kjp6r": {
						"modelConfig": {
							"path": "UsrYatchRentalDS.UsrAmount"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYatchRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYatchRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYatchRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});