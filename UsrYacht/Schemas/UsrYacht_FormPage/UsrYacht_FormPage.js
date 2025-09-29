define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9e799e89-7e47-4403-abbf-22850f55ddff",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true,
					"icon": "actions-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunMaxPriceWebServicesMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunMaxPriceWebServicesMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "rocket-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunCalcAvgTicketProcessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunCalcAvgTicketProcessMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YatchIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "send-test-email-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_bijuxio",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_bijuxio"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_phzfrp2",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_phzfrp2",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_lwgpu37",
					"labelPosition": "auto",
					"control": "$PDS_UsrLength_lwgpu37"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_bb92kr7",
					"labelPosition": "auto",
					"control": "$PDS_UsrCaptain_bb92kr7",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CrewNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewNumber_4zpfsw8",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewNumber_4zpfsw8"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_d448hzx",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_d448hzx",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassangersNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassangersNumber_xri7jkb",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassangersNumber_xri7jkb"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_3asz178",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_3asz178",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_dqx109v",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_dqx109v",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_afxp8ha",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_afxp8ha",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "CountryValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_n4ru54y",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_n4ru54y",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_1qab9kp",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ManagerEmail_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_it5ig8d",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_it5ig8d",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_20vgm33",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_20vgm33",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "MultiSelectYachtCategory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelectYachtCategory_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYatch",
					"selectSchemaName": "UsrYatchCategoryDetail",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"isModalView": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "YatchRentalExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(YatchRentalExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_e31ge6m",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "YatchRentalExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lfdn6hc",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_e31ge6m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_enwv3mq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_enwv3mq_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYatchRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYatch",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_lfdn6hc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_sbt1773",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_sbt1773_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_pewxgpjDS"
						}
					}
				},
				"parentName": "FlexContainer_lfdn6hc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_numn3m7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_numn3m7_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_lfdn6hc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2w0kj8g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2w0kj8g_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YatchRentalGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_numn3m7",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_92wcyoo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_92wcyoo_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYatchRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_numn3m7",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_e20kp2q",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_e20kp2q_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_e20kp2q_GridDetail_pewxgpj",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_pewxgpj"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_e20kp2q_SearchValue",
							"GridDetailSearchFilter_e20kp2q_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_lfdn6hc",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_wzau3ug",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "YatchRentalExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YatchRentalGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_pewxgpj",
					"activeRow": "$GridDetail_pewxgpj_ActiveRow",
					"selectionState": "$GridDetail_pewxgpj_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_pewxgpj_SelectionState"
					},
					"primaryColumnName": "GridDetail_pewxgpjDS_Id",
					"columns": [
						{
							"id": "4dbbfec2-d4ea-68bd-e982-bea218c9cae0",
							"code": "GridDetail_pewxgpjDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_pewxgpjDS_UsrStartDate)#",
							"dataValueType": 8
						},
						{
							"id": "6d9944b7-72aa-370e-b1ed-d68a23fb27c0",
							"code": "GridDetail_pewxgpjDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_pewxgpjDS_UsrEndDate)#",
							"dataValueType": 8
						},
						{
							"id": "137d37d3-2f09-b52d-cd7e-cc0d42f3cf52",
							"code": "GridDetail_pewxgpjDS_UsrAmount",
							"caption": "#ResourceString(GridDetail_pewxgpjDS_UsrAmount)#",
							"dataValueType": 32
						},
						{
							"id": "51c295b8-aa14-6348-911d-7a2b647dabf6",
							"code": "GridDetail_pewxgpjDS_UsrComment",
							"caption": "#ResourceString(GridDetail_pewxgpjDS_UsrComment)#",
							"dataValueType": 28,
							"width": 213.00001525878906
						},
						{
							"id": "f6bb999b-f82f-2f1b-8521-979e59ab2fc3",
							"code": "GridDetail_pewxgpjDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_pewxgpjDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 165.00001525878906
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_wzau3ug",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pewxgpj_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pewxgpjDS",
							"filters": "$GridDetail_pewxgpj | crt.ToCollectionFilters : 'GridDetail_pewxgpj' : $GridDetail_pewxgpj_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pewxgpj_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "YatchRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pewxgpj_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pewxgpjDS",
							"filters": "$GridDetail_pewxgpj | crt.ToCollectionFilters : 'GridDetail_pewxgpj' : $GridDetail_pewxgpj_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pewxgpj_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_pewxgpj_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pewxgpj_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YatchRentalGridDetail",
							"filters": "$GridDetail_pewxgpj | crt.ToCollectionFilters : 'GridDetail_pewxgpj' : $GridDetail_pewxgpj_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pewxgpj_SelectionState"
						}
					}
				},
				"parentName": "YatchRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_pewxgpj_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pewxgpjDS",
							"filters": "$GridDetail_pewxgpj | crt.ToCollectionFilters : 'GridDetail_pewxgpj' : $GridDetail_pewxgpj_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pewxgpj_SelectionState"
						}
					}
				},
				"parentName": "YatchRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_bijuxio": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrLength_lwgpu37": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 3,
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewNumber_4zpfsw8": {
						"modelConfig": {
							"path": "PDS.UsrCrewNumber"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewNumberCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPassangersNumber_xri7jkb": {
						"modelConfig": {
							"path": "PDS.UsrPassangersNumber"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PassangersNumberCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrComment_dqx109v": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrCaptain_bb92kr7": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrDriveType_d448hzx": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_3asz178": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrManager_afxp8ha": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_20vgm33": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_n4ru54y": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_it5ig8d": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrTicketPrice_phzfrp2": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_1qab9kp": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_1qab9kp"
						}
					},
					"GridDetail_pewxgpj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_pewxgpjDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_e20kp2q_GridDetail_pewxgpj",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_pewxgpjDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_pewxgpjDS.UsrStartDate"
									}
								},
								"GridDetail_pewxgpjDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_pewxgpjDS.UsrEndDate"
									}
								},
								"GridDetail_pewxgpjDS_UsrAmount": {
									"modelConfig": {
										"path": "GridDetail_pewxgpjDS.UsrAmount"
									}
								},
								"GridDetail_pewxgpjDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_pewxgpjDS.UsrComment"
									}
								},
								"GridDetail_pewxgpjDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_pewxgpjDS.CreatedOn"
									}
								},
								"GridDetail_pewxgpjDS_Id": {
									"modelConfig": {
										"path": "GridDetail_pewxgpjDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_pewxgpjDS": [
							{
								"attributePath": "UsrParentYatch",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_1qab9kp": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_pewxgpjDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYatchRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrAmount": {
									"path": "UsrAmount"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_bijuxio;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_dqx109v = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_bijuxio' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassangersNumber_xri7jkb' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_bijuxio;
						let passengers = await request.$context.PDS_UsrPassangersNumber_xri7jkb;
						let ticket_price = 0;
						if (passengers != 0) {
							ticket_price = price / passengers;
						}
						request.$context.PDS_UsrTicketPrice_phzfrp2 = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType_d448hzx;
					var driveTypeId = "";
					if (typeObject) {
						driveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetMaxPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/Dev-Practice-Official/0/rest/YachtService/GetMaxPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: driveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});