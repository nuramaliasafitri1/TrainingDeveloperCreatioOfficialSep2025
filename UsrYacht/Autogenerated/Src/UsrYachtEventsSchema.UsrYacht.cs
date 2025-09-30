namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("738ea46d-dd8f-4363-8434-5ad408a835d6");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e4b064be-5853-4034-b2ee-1bd4db2c6cd5");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,93,107,27,49,16,124,15,228,63,44,247,116,7,70,52,175,73,27,168,93,55,4,66,82,122,231,66,41,125,144,117,235,179,138,62,14,73,231,212,45,249,239,93,73,118,226,156,93,200,130,241,105,53,154,157,25,214,112,141,190,231,2,161,65,231,184,183,171,192,102,214,172,100,55,56,30,164,53,231,103,127,207,207,128,106,240,210,116,80,111,125,64,125,117,216,58,124,168,181,53,255,189,116,200,230,38,200,32,209,191,5,195,230,27,52,97,15,253,145,218,219,212,187,147,36,194,160,43,107,177,70,205,239,201,3,124,128,98,225,221,119,46,214,161,168,126,230,55,253,176,84,82,128,80,220,123,72,87,39,72,224,18,166,220,227,137,155,76,178,179,127,192,103,55,36,88,182,8,27,43,91,120,48,53,223,144,141,210,46,127,161,8,224,209,180,232,38,144,9,167,184,34,79,137,246,163,235,60,96,245,66,119,192,28,107,73,42,216,51,219,158,6,171,171,215,176,204,11,219,104,135,92,151,249,92,101,252,8,219,162,144,154,43,232,157,20,49,162,244,136,221,96,104,182,61,182,51,171,6,109,190,113,53,224,251,29,242,186,140,41,126,137,240,98,60,88,174,160,204,68,215,112,241,46,85,245,26,49,50,20,11,217,173,159,113,35,80,97,75,2,130,27,48,210,30,3,125,112,113,23,104,27,61,239,176,65,221,43,30,162,102,131,143,112,103,5,87,242,15,95,42,172,19,174,204,78,22,30,29,109,171,161,220,105,85,217,87,244,118,112,130,48,214,17,201,228,196,152,88,207,139,146,23,172,152,64,113,52,192,179,148,203,173,111,172,157,202,46,159,138,138,53,118,39,160,122,139,13,146,159,27,236,179,117,154,135,114,100,143,38,95,0,229,152,126,139,250,211,81,230,177,194,218,217,199,20,195,252,183,192,62,58,221,243,140,225,79,47,199,221,39,253,61,253,3,25,175,254,178,228,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("169e70e3-5d3a-d340-8d6f-5d4276148b6f"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("e4b064be-5853-4034-b2ee-1bd4db2c6cd5"),
				CreatedInSchemaUId = new Guid("738ea46d-dd8f-4363-8434-5ad408a835d6"),
				ModifiedInSchemaUId = new Guid("738ea46d-dd8f-4363-8434-5ad408a835d6")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("738ea46d-dd8f-4363-8434-5ad408a835d6"));
		}

		#endregion

	}

	#endregion

}

