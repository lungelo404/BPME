/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM package com.sfc.fosImpl.dataModel.DataModelPackage.
 */

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DataModelPackage"] = function() {
    /** Constructor. */
    var theClass = function() {
    };
    bpm.data.Loader.currentLoader.registerPackage(theClass, "com.sfc.fosImpl.dataModel.DataModelPackage");

    // Define the enumerations declared by this package.
    theClass.AccountType = {"NEW":"NEW", "MIGRATION":"MIGRATION"};
    theClass.ServiceType = {"INTERNET":"INTERNET", "FIBER":"FIBER", "WIMAX":"WIMAX"};
    theClass.Bandwidth = {"FFB5":"FFB5"};
    theClass.TechnologyList = {"FIBER":"FIBER"};
    theClass.ServiceStatus = {"REGISTERED":"REGISTERED", "VERIFIED":"VERIFIED", "APPROVED":"APPROVED", "COMPLETED":"COMPLETED"};
    theClass.EmailRecipient = {"NONE":"NONE", "SPECIFIC":"SPECIFIC", "PM":"PM"};
    theClass.TaskRecipient = {"NONE":"NONE", "SPECIFIC":"SPECIFIC", "PM":"PM"};
    theClass.ProcessName = {"PROVISIONING":"PROVISIONING", "DECOMISSIONING":"DECOMISSIONING"};
    theClass.EnableDisable = {"ENABLE":"ENABLE", "DISABLE":"DISABLE"};
};

bpm.scriptUtil._internal.checkVersionCompatibility("com.sfc.fosImpl.dataModel.js", "11.0.0.044");
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DataModelPackage"]();

/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM factory com.sfc.fosImpl.dataModel.DataModelFactory. 
 */ 

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DataModelFactory"] = function() {
    /** Constructor. */
    var theClass = function(form) {
        this.context = {};
        this.context.form = form;
        if (form.getLogger)
            this.context.logger = form.getLogger();
        this.context.item = null;
        this.context.id = null;
        this.$loader = form._loader;
    };
    bpm.data.Loader.currentLoader.registerFactory(theClass, "com.sfc.fosImpl.dataModel.DataModelFactory");

    theClass.prototype.SUPPORTED_CLASSES = [
        "com.sfc.fosImpl.dataModel.ProvisioningDataModel",
        "com.sfc.fosImpl.dataModel.SystemParameters",
        "com.sfc.fosImpl.dataModel.SLA_Configuration",
        "com.sfc.fosImpl.dataModel.TechnicalInformation",
        "com.sfc.fosImpl.dataModel.EquipmentDetails",
        "com.sfc.fosImpl.dataModel.ContractorGroups",
        "com.sfc.fosImpl.dataModel.CommentData",
        "com.sfc.fosImpl.dataModel.CommentDataCase",
        "com.sfc.fosImpl.dataModel.LookupTable",
        "com.sfc.fosImpl.dataModel.ProcessNameAndSteps",
        "com.sfc.fosImpl.dataModel.DecommissionExecutionRequest",
        "com.sfc.fosImpl.dataModel.Header",
        "com.sfc.fosImpl.dataModel.planItem",
        "com.sfc.fosImpl.dataModel.UserDefinedFields",
        "com.sfc.fosImpl.dataModel.BussinessUsers",
        "com.sfc.fosImpl.dataModel.ActivationExecutionRequest",
        "com.sfc.fosImpl.dataModel.Process_Logging",
        "com.sfc.fosImpl.dataModel.MaterialBreakdown",
        "com.sfc.fosImpl.dataModel.RequestMetaData",
        "com.sfc.fosImpl.dataModel.Management_IP_List",
        "com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest",
        "com.sfc.fosImpl.dataModel.DeviceRequest",
        "com.sfc.fosImpl.dataModel.CPEManagementIPDetails",
        "com.sfc.fosImpl.dataModel.ServiceIPDetails",
        "com.sfc.fosImpl.dataModel.ProcessExecutionRequest",
        "com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del",
        "com.sfc.fosImpl.dataModel.ServiceRequest"
    ];

    theClass.prototype.checkClassName = function(className) {
        for (var i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
            if (className == this.SUPPORTED_CLASSES[i])
                return;
        };
        throw "Factory com.sfc.fosImpl.dataModel.DataModelFactory does not support class \"" + className + "\"";
    };

    theClass.prototype.create = function(className, jsonData) {
        this.checkClassName(className);
        var instance = this.$loader.newInstance(className, this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData, this.context);
        return instance;
    };

    theClass.prototype.createProvisioningDataModel = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProvisioningDataModel", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateProvisioningDataModel = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProvisioningDataModel", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSystemParameters = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.SystemParameters", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSystemParameters = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.SystemParameters", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSLA_Configuration = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.SLA_Configuration", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSLA_Configuration = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.SLA_Configuration", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createTechnicalInformation = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.TechnicalInformation", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateTechnicalInformation = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.TechnicalInformation", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createEquipmentDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.EquipmentDetails", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateEquipmentDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.EquipmentDetails", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createContractorGroups = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ContractorGroups", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateContractorGroups = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ContractorGroups", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCommentData = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.CommentData", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCommentData = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.CommentData", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCommentDataCase = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.CommentDataCase", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCommentDataCase = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.CommentDataCase", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createLookupTable = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.LookupTable", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateLookupTable = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.LookupTable", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createProcessNameAndSteps = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProcessNameAndSteps", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateProcessNameAndSteps = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProcessNameAndSteps", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createDecommissionExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.DecommissionExecutionRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateDecommissionExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.DecommissionExecutionRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createHeader = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.Header", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateHeader = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.Header", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPlanItem = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.planItem", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePlanItem = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.planItem", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createUserDefinedFields = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.UserDefinedFields", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateUserDefinedFields = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.UserDefinedFields", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createBussinessUsers = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.BussinessUsers", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateBussinessUsers = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.BussinessUsers", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createActivationExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ActivationExecutionRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateActivationExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ActivationExecutionRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createProcess_Logging = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.Process_Logging", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateProcess_Logging = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.Process_Logging", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createMaterialBreakdown = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.MaterialBreakdown", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateMaterialBreakdown = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.MaterialBreakdown", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createRequestMetaData = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.RequestMetaData", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateRequestMetaData = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.RequestMetaData", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createManagement_IP_List = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.Management_IP_List", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateManagement_IP_List = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.Management_IP_List", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSwapTariffExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSwapTariffExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createDeviceRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.DeviceRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateDeviceRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.DeviceRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCPEManagementIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.CPEManagementIPDetails", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCPEManagementIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.CPEManagementIPDetails", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createServiceIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ServiceIPDetails", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateServiceIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ServiceIPDetails", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createProcessExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProcessExecutionRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateProcessExecutionRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProcessExecutionRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createProvisioningDataModel_Del = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateProvisioningDataModel_Del = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createServiceRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ServiceRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateServiceRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.dataModel.ServiceRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.getClass = function(className) {
        this.checkClassName(className);
        return this.$loader.getClass(className);
    };
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DataModelFactory"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.planItem. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.planItem"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.planItem");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PLANITEMID = "planItemID";
    theClass.ATTR_PROVISIONINGDATA = "provisioningData";
    theClass.ATTR_TECHNICALINFORMATION = "technicalInformation";
    theClass.ATTR_UDF = "udf";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROVISIONINGDATA] = {
        type: "com.sfc.fosImpl.dataModel.ProvisioningDataModel",
        baseType: "com.sfc.fosImpl.dataModel.ProvisioningDataModel",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TECHNICALINFORMATION] = {
        type: "com.sfc.fosImpl.dataModel.TechnicalInformation",
        baseType: "com.sfc.fosImpl.dataModel.TechnicalInformation",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_UDF] = {
        type: "com.sfc.fosImpl.dataModel.UserDefinedFields",
        baseType: "com.sfc.fosImpl.dataModel.UserDefinedFields",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.planItem"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ProcessNameAndSteps. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProcessNameAndSteps"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ProcessNameAndSteps");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESSNAME = "processName";
    theClass.ATTR_STEPNAME = "stepName";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STEPNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProcessNameAndSteps"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_HEADER = "header";
    theClass.ATTR_PLANITEM = "planItem";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_HEADER] = {
        type: "com.sfc.fosImpl.dataModel.Header",
        baseType: "com.sfc.fosImpl.dataModel.Header",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEM] = {
        type: "com.sfc.fosImpl.dataModel.planItem",
        baseType: "com.sfc.fosImpl.dataModel.planItem",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.SwapTariffExecutionRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.Process_Logging. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.Process_Logging"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.Process_Logging");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESSTYPE = "processType";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_TASKNAME = "taskName";
    theClass.ATTR_CUSTOMERNAME = "customerName";
    theClass.ATTR_PROJECTMANAGER = "projectManager";
    theClass.ATTR_ACCOUNTMANAGER = "accountManager";
    theClass.ATTR_TASKDEFAULTSLA = "taskDefaultSLA";
    theClass.ATTR_TASKINITIATIONTIME = "taskInitiationTime";
    theClass.ATTR_TASKCOMPLETIONTIME = "taskCompletionTime";
    theClass.ATTR_TOTALTIMETAKEN = "totalTimeTaken";
    theClass.ATTR_SLASTATUS = "SLAStatus";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSTYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 100, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMERNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 100, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROJECTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 100, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKDEFAULTSLA] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKINITIATIONTIME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKCOMPLETIONTIME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TOTALTIMETAKEN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SLASTATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.Process_Logging"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.BussinessUsers. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.BussinessUsers"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.BussinessUsers");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CASEID = "caseID";
    theClass.ATTR_LOGINNAME = "loginName";
    theClass.ATTR_FIRSTNAME = "firstName";
    theClass.ATTR_LASTNAME = "lastName";
    theClass.ATTR_GROUPNAME = "groupName";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_ADDEDBY = "addedBy";
    theClass.ATTR_ADDEDON = "addedOn";
    theClass.ATTR_MOBILENUMBER = "mobileNumber";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CASEID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 200, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOGINNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIRSTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_GROUPNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDON] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MOBILENUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.BussinessUsers"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_PROJECTMANAGER = "projectManager";
    theClass.ATTR_CLIENTNAME = "clientName";
    theClass.ATTR_ACCOUNTMANAGER = "accountManager";
    theClass.ATTR_ACCOUNT = "account";
    theClass.ATTR_CONTRACTOR = "contractor";
    theClass.ATTR_LOCATION = "location";
    theClass.ATTR_REGIONVIEW = "regionView";
    theClass.ATTR_FLOOR = "floor";
    theClass.ATTR_CLIENTID = "clientID";
    theClass.ATTR_SERVICETYPE = "serviceType";
    theClass.ATTR_GPSCOORDINATES = "GPSCoordinates";
    theClass.ATTR_BANDWIDTHUPDOWN = "bandwidthupdown";
    theClass.ATTR_TECHNOLOGY = "technology";
    theClass.ATTR_SERVICESTATUS = "serviceStatus";
    theClass.ATTR_BUILDINGNAME = "buildingName";
    theClass.ATTR_BUILDINGID = "buildingID";
    theClass.ATTR_CONTACTPERSON = "contactPerson";
    theClass.ATTR_MOBILE = "mobile";
    theClass.ATTR_SECTOR = "sector";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_SERVICESTART = "serviceStart";
    theClass.ATTR_SERVICEEND = "serviceEnd";
    theClass.ATTR_REQUESTDATE = "requestDate";
    theClass.ATTR_INSTALLDATE = "installDate";
    theClass.ATTR_NOTESCOMMENTS = "notesComments";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_ENGINEER = "engineer";
    theClass.ATTR_LASTNOTIFICATIONBY = "lastNotificationBy";
    theClass.ATTR_LASTNOTIFICATIONDATE = "lastNotificationDate";
    theClass.ATTR_RECORDSTATUS = "recordStatus";
    theClass.ATTR_CONTRACTOR_ENGINEER = "contractor_Engineer";
    theClass.ATTR_CONTRACTORENGINEER_PHNUMBER = "contractorEngineer_PhNumber";
    theClass.ATTR_ACTIONBY = "actionBy";
    theClass.ATTR_ACTIVITYDATETIME = "activityDateTime";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROJECTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTOR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOCATION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REGIONVIEW] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLOOR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICETYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_GPSCOORDINATES] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BANDWIDTHUPDOWN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TECHNOLOGY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICESTATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDINGNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDINGID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTACTPERSON] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MOBILE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SECTOR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICESTART] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICEEND] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REQUESTDATE] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_INSTALLDATE] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NOTESCOMMENTS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 300
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENGINEER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNOTIFICATIONBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNOTIFICATIONDATE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RECORDSTATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTOR_ENGINEER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTORENGINEER_PHNUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACTIONBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACTIVITYDATETIME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProvisioningDataModel_Del"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.CPEManagementIPDetails. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.CPEManagementIPDetails"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.CPEManagementIPDetails");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CPEMANAGEMENTIP = "CPEManagementIP";
    theClass.ATTR_CPEMANAGEMENTVLAN = "CPEManagementVLAN";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CPEMANAGEMENTIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CPEMANAGEMENTVLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.CPEManagementIPDetails"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ContractorGroups. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ContractorGroups"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ContractorGroups");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_LOGINNAME = "loginName";
    theClass.ATTR_FIRSTNAME = "firstName";
    theClass.ATTR_LASTNAME = "lastName";
    theClass.ATTR_CONTRACTORGROUPNAME = "contractorGroupName";
    theClass.ATTR_MASTERUSER = "masterUser";
    theClass.ATTR_EMAILID = "emailID";
    theClass.ATTR_ADDEDBY = "addedBy";
    theClass.ATTR_ADDEDON = "addedOn";
    theClass.ATTR_MOBILENUMBER = "mobileNumber";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_LOGINNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIRSTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTORGROUPNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MASTERUSER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAILID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 100, 
		caseIdManual: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDON] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MOBILENUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ContractorGroups"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ServiceRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ServiceRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ServiceRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_BANDWIDTHUPDOWN = "bandwidthupdown";
    theClass.ATTR_SERVICETYPE = "serviceType";
    theClass.ATTR_TECHNOLOGY = "technology";
    theClass.ATTR_SERVICESTATUS = "serviceStatus";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_BANDWIDTHUPDOWN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICETYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TECHNOLOGY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICESTATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ServiceRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.SystemParameters. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.SystemParameters"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.SystemParameters");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROPERTYNAME = "propertyName";
    theClass.ATTR_PROPERTYVALUE = "propertyValue";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROPERTYNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdManual: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROPERTYVALUE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.SystemParameters"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.LookupTable. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.LookupTable"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.LookupTable");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_LOOKUPVALUE = "lookupValue";
    theClass.ATTR_AUTOCASEIDENTIFIER1 = "autoCaseIdentifier1";
    theClass.ATTR_LOOKUPKEY = "lookupKey";
    theClass.ATTR_ENABLEFLAG = "enableFlag";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_LOOKUPVALUE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 400, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_AUTOCASEIDENTIFIER1] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOOKUPKEY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENABLEFLAG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.LookupTable"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.MaterialBreakdown. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.MaterialBreakdown"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.MaterialBreakdown");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_MATERIALDESCRIPTION = "materialDescription";
    theClass.ATTR_UDM = "UDM";
    theClass.ATTR_QTY = "qty";
    theClass.ATTR_AMOUNT = "amount";
    theClass.ATTR_UNITPRICE = "unitPrice";
    theClass.ATTR_COMMENT = "comment";
    theClass.ATTR_STATE = "state";
    theClass.ATTR_MATERIALBREAKDOWNID = "materialBreakdownID";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 100, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MATERIALDESCRIPTION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 300, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_UDM] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_QTY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_AMOUNT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_UNITPRICE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COMMENT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MATERIALBREAKDOWNID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.MaterialBreakdown"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ProcessExecutionRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProcessExecutionRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ProcessExecutionRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_HEADER = "header";
    theClass.ATTR_PLANITEMID = "planitemID";
    theClass.ATTR_UDF = "udf";
    theClass.ATTR_PROCESSNAME = "processName";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_HEADER] = {
        type: "com.sfc.fosImpl.dataModel.Header",
        baseType: "com.sfc.fosImpl.dataModel.Header",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_UDF] = {
        type: "com.sfc.fosImpl.dataModel.UserDefinedFields",
        baseType: "com.sfc.fosImpl.dataModel.UserDefinedFields",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProcessExecutionRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.UserDefinedFields. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.UserDefinedFields"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.UserDefinedFields");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_EVALUATIONPRIORITY = "evaluationPriority";
    theClass.ATTR_TYPE = "type";
    theClass.ATTR_FLAVOUR = "flavour";
    theClass.ATTR_NAME = "name";
    theClass.ATTR_VALUE = "value";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_EVALUATIONPRIORITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAVOUR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VALUE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.UserDefinedFields"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.Management_IP_List. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.Management_IP_List"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.Management_IP_List");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_MANAGEMENT_VLAN = "management_VLAN";
    theClass.ATTR_CARRIER_VLAN = "carrier_VLAN";
    theClass.ATTR_MANAGEMENT_CARRIER_IP = "management_Carrier_IP";
    theClass.ATTR_AGGREGATION_POINT = "aggregation_Point";
    theClass.ATTR_PORT_NUMBER = "port_Number";
    theClass.ATTR_COMMENTS = "comments";
    theClass.ATTR_CAPACITY = "capacity";
    theClass.ATTR_PORT_TYPE = "port_Type";
    theClass.ATTR_CARRIEREQUIPMENTTYPE = "carrierEquipmentType";
    theClass.ATTR_CARRIERIP = "carrierIP";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_MANAGEMENT_VLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIER_VLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MANAGEMENT_CARRIER_IP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_AGGREGATION_POINT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PORT_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COMMENTS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CAPACITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PORT_TYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIEREQUIPMENTTYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIERIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.Management_IP_List"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.EquipmentDetails. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.EquipmentDetails"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.EquipmentDetails");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_TYPE = "type";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_VLAN = "VLAN";
    theClass.ATTR_SFC_TAG_NUMBER = "SFC_Tag_Number";
    theClass.ATTR_SERIAL_NUMBER = "serial_Number";
    theClass.ATTR_EMEI = "EMEI";
    theClass.ATTR_ADDEDBY = "addedBy";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_IR_NUMBER = "IR_Number";
    theClass.ATTR_SIEBEL_CIRCUIT_ID = "siebel_Circuit_ID";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SFC_TAG_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERIAL_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMEI] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_IR_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBEL_CIRCUIT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.EquipmentDetails"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.DecommissionExecutionRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DecommissionExecutionRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.DecommissionExecutionRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_HEADER = "header";
    theClass.ATTR_PLANITEM = "planItem";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_HEADER] = {
        type: "com.sfc.fosImpl.dataModel.Header",
        baseType: "com.sfc.fosImpl.dataModel.Header",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEM] = {
        type: "com.sfc.fosImpl.dataModel.planItem",
        baseType: "com.sfc.fosImpl.dataModel.planItem",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DecommissionExecutionRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ProvisioningDataModel. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProvisioningDataModel"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ProvisioningDataModel");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_PROJECTMANAGER = "projectManager";
    theClass.ATTR_CLIENTNAME = "clientName";
    theClass.ATTR_ACCOUNTMANAGER = "accountManager";
    theClass.ATTR_ACCOUNT = "account";
    theClass.ATTR_CONTRACTOR = "contractor";
    theClass.ATTR_LOCATION = "location";
    theClass.ATTR_REGIONVIEW = "regionView";
    theClass.ATTR_FLOOR = "floor";
    theClass.ATTR_CLIENTID = "clientID";
    theClass.ATTR_SERVICETYPE = "serviceType";
    theClass.ATTR_GPSCOORDINATES = "GPSCoordinates";
    theClass.ATTR_BANDWIDTHUPDOWN = "bandwidthupdown";
    theClass.ATTR_TECHNOLOGY = "technology";
    theClass.ATTR_SERVICESTATUS = "serviceStatus";
    theClass.ATTR_BUILDINGNAME = "buildingName";
    theClass.ATTR_BUILDINGID = "buildingID";
    theClass.ATTR_CONTACTPERSON = "contactPerson";
    theClass.ATTR_MOBILE = "mobile";
    theClass.ATTR_SECTOR = "sector";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_SERVICESTART = "serviceStart";
    theClass.ATTR_SERVICEEND = "serviceEnd";
    theClass.ATTR_REQUESTDATE = "requestDate";
    theClass.ATTR_INSTALLDATE = "installDate";
    theClass.ATTR_NOTESCOMMENTS = "notesComments";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_ENGINEER = "engineer";
    theClass.ATTR_LASTNOTIFICATIONBY = "lastNotificationBy";
    theClass.ATTR_LASTNOTIFICATIONDATE = "lastNotificationDate";
    theClass.ATTR_RECORDSTATUS = "recordStatus";
    theClass.ATTR_CONTRACTOR_ENGINEER = "contractor_Engineer";
    theClass.ATTR_CONTRACTORENGINEER_PHNUMBER = "contractorEngineer_PhNumber";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROJECTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTOR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOCATION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REGIONVIEW] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLOOR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICETYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_GPSCOORDINATES] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BANDWIDTHUPDOWN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TECHNOLOGY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICESTATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDINGNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDINGID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTACTPERSON] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MOBILE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SECTOR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICESTART] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICEEND] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REQUESTDATE] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_INSTALLDATE] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NOTESCOMMENTS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 300
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENGINEER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNOTIFICATIONBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNOTIFICATIONDATE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RECORDSTATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTOR_ENGINEER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CONTRACTORENGINEER_PHNUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ProvisioningDataModel"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.DeviceRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DeviceRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.DeviceRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_DEVICENAME = "deviceName";
    theClass.ATTR_DEVICEDESCRIPTION = "deviceDescription";
    theClass.ATTR_QUANTITY = "quantity";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_TYPE = "type";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_VLAN = "VLAN";
    theClass.ATTR_SFC_TAG_NUMBER = "SFC_Tag_Number";
    theClass.ATTR_SERIAL_NUMBER = "serial_Number";
    theClass.ATTR_IMEI = "IMEI";
    theClass.ATTR_ADDEDBY = "addedBy";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_IR_NUMBER = "IR_Number";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_DEVICENAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_DEVICEDESCRIPTION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_QUANTITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SFC_TAG_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERIAL_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_IMEI] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_IR_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.DeviceRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ActivationExecutionRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ActivationExecutionRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ActivationExecutionRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_HEADER = "header";
    theClass.ATTR_PLANITEM = "planItem";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_HEADER] = {
        type: "com.sfc.fosImpl.dataModel.Header",
        baseType: "com.sfc.fosImpl.dataModel.Header",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEM] = {
        type: "com.sfc.fosImpl.dataModel.planItem",
        baseType: "com.sfc.fosImpl.dataModel.planItem",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ActivationExecutionRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.CommentData. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.CommentData"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.CommentData");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_ADDEDBY = "addedby";
    theClass.ATTR_COMMENTS = "comments";
    theClass.ATTR_STEPNAME = "stepName";
    theClass.ATTR_TIME = "time";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COMMENTS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 500
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STEPNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TIME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.CommentData"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.RequestMetaData. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.RequestMetaData"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.RequestMetaData");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_BUSSINESSTRANSACTIONID = "bussinessTransactionID";
    theClass.ATTR_CORRELATIONID = "correlationID";
    theClass.ATTR_ORDERID = "orderID";
    theClass.ATTR_ORDERREFNUMBER = "orderRefNumber";
    theClass.ATTR_PLANID = "planID";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_MANUAL = "manual";
    theClass.ATTR_PROCESSNAME = "processName";
    theClass.ATTR_PVMID = "PVMID";
    theClass.ATTR_CASEID = "caseID";
    theClass.ATTR_PLANITEMID = "planItemID";
    theClass.ATTR_STARTDATETIME = "startDateTime";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_COMPLETEDBY = "completedBy";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_BUSSINESSTRANSACTIONID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CORRELATIONID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORDERID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORDERREFNUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MANUAL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PVMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CASEID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STARTDATETIME] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COMPLETEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.RequestMetaData"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.ServiceIPDetails. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ServiceIPDetails"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.ServiceIPDetails");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SFCPOPPE = "SFCPOPPE";
    theClass.ATTR_CLIENTIP = "clientIP";
    theClass.ATTR_CLIENTVLAN = "clientVLAN";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SFCPOPPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTVLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.ServiceIPDetails"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.Header. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.Header"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.Header");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_BUSINESSTRANSACTIONID = "businessTransactionID";
    theClass.ATTR_CORRELATIONID = "correlationID";
    theClass.ATTR_ORDERID = "orderID";
    theClass.ATTR_ORDERREFNUM = "orderRefNum";
    theClass.ATTR_PLANID = "planID";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_BUSINESSTRANSACTIONID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CORRELATIONID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORDERID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORDERREFNUM] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.Header"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.SLA_Configuration. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.SLA_Configuration"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.SLA_Configuration");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SLAID = "SLAID";
    theClass.ATTR_SLALEVEL = "SLALevel";
    theClass.ATTR_TASKNAME = "taskName";
    theClass.ATTR_PROCESSNAME = "processName";
    theClass.ATTR_SLA_DEADLINE = "SLA_Deadline";
    theClass.ATTR_EMAILTO = "emailTo";
    theClass.ATTR_TASKTO = "taskTo";
    theClass.ATTR_EMAILCONFIG = "emailConfig";
    theClass.ATTR_TASKCONFIG = "taskConfig";
    theClass.ATTR_ENABLEDISABLEFLAG = "enableDisableFlag";
    theClass.ATTR_EMAILCC = "emailCC";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SLAID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SLALEVEL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SLA_DEADLINE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAILTO] = {
        type: "com.sfc.fosImpl.dataModel.EmailRecipient",
        baseType: "com.sfc.fosImpl.dataModel.EmailRecipient",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKTO] = {
        type: "com.sfc.fosImpl.dataModel.TaskRecipient",
        baseType: "com.sfc.fosImpl.dataModel.TaskRecipient",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAILCONFIG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKCONFIG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENABLEDISABLEFLAG] = {
        type: "com.sfc.fosImpl.dataModel.EnableDisable",
        baseType: "com.sfc.fosImpl.dataModel.EnableDisable",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "", 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAILCC] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 800
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.SLA_Configuration"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.TechnicalInformation. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.TechnicalInformation"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.TechnicalInformation");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CARRIERVLAN = "carrierVLAN";
    theClass.ATTR_CARRIERIP = "carrierIP";
    theClass.ATTR_AGGPOINT = "aggPoint";
    theClass.ATTR_PORT = "port";
    theClass.ATTR_CLIENTVLAN = "clientVLAN";
    theClass.ATTR_CLIENTIP = "clientIP";
    theClass.ATTR_SFCPOPPE = "SFCPOPPE";
    theClass.ATTR_PORTTYPE = "portType";
    theClass.ATTR_EQUIPMENT = "equipment";
    theClass.ATTR_MODIFIEDBY = "modifiedBy";
    theClass.ATTR_MODIFIEDDATE = "modifiedDate";
    theClass.ATTR_MANAGEMENT_IP_INFO = "management_IP_Info";
    theClass.ATTR_IR_NUMBER = "IR_Number";
    theClass.ATTR_MRR = "MRR";
    theClass.ATTR_SECURITY = "security";
    theClass.ATTR_DEVICEREQUEST = "deviceRequest";
    theClass.ATTR_CPEMANAGEMENTIPDETAILS = "CPEManagementIPDetails";
    theClass.ATTR_SERVICEIPDETAILS = "serviceIPDetails";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIERVLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIERIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_AGGPOINT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PORT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTVLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SFCPOPPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PORTTYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EQUIPMENT] = {
        type: "com.sfc.fosImpl.dataModel.EquipmentDetails",
        baseType: "com.sfc.fosImpl.dataModel.EquipmentDetails",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MODIFIEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MODIFIEDDATE] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MANAGEMENT_IP_INFO] = {
        type: "com.sfc.fosImpl.dataModel.Management_IP_List",
        baseType: "com.sfc.fosImpl.dataModel.Management_IP_List",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_IR_NUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MRR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SECURITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_DEVICEREQUEST] = {
        type: "com.sfc.fosImpl.dataModel.DeviceRequest",
        baseType: "com.sfc.fosImpl.dataModel.DeviceRequest",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CPEMANAGEMENTIPDETAILS] = {
        type: "com.sfc.fosImpl.dataModel.CPEManagementIPDetails",
        baseType: "com.sfc.fosImpl.dataModel.CPEManagementIPDetails",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICEIPDETAILS] = {
        type: "com.sfc.fosImpl.dataModel.ServiceIPDetails",
        baseType: "com.sfc.fosImpl.dataModel.ServiceIPDetails",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.TechnicalInformation"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.dataModel.CommentDataCase. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.CommentDataCase"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.dataModel.CommentDataCase");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_COMMENT_ID = "comment_Id";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_TASKNAME = "taskName";
    theClass.ATTR_ADDEDBY = "addedby";
    theClass.ATTR_COMMENTS = "comments";
    theClass.ATTR_TIME = "time";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_COMMENT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COMMENTS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 350, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TIME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATE] = {
        type: "com.sfc.fosImpl.bizData.dataModel.States",
        baseType: "com.sfc.fosImpl.bizData.dataModel.States",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["STARTED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.dataModel.CommentDataCase"]();
