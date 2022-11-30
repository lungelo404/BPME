/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM package com.sfc.fosImpl.bizData.dataModel.DataModelPackage.
 */

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.DataModelPackage"] = function() {
    /** Constructor. */
    var theClass = function() {
    };
    bpm.data.Loader.currentLoader.registerPackage(theClass, "com.sfc.fosImpl.bizData.dataModel.DataModelPackage");

    // Define the enumerations declared by this package.
    theClass.States = {"STARTED":"STARTED", "COMPLETED":"COMPLETED", "CANCELLED":"CANCELLED", "OPENED":"OPENED", "ALLOCATED":"ALLOCATED", "OFFERED":"OFFERED", "ERRORED":"ERRORED"};
};

bpm.scriptUtil._internal.checkVersionCompatibility("com.sfc.fosImpl.bizData.dataModel.js", "11.0.0.044");
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.DataModelPackage"]();

/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM factory com.sfc.fosImpl.bizData.dataModel.DataModelFactory. 
 */ 

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.DataModelFactory"] = function() {
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
    bpm.data.Loader.currentLoader.registerFactory(theClass, "com.sfc.fosImpl.bizData.dataModel.DataModelFactory");

    theClass.prototype.SUPPORTED_CLASSES = [
        "com.sfc.fosImpl.bizData.dataModel.Technical_Information",
        "com.sfc.fosImpl.bizData.dataModel.Equipment_Details",
        "com.sfc.fosImpl.bizData.dataModel.Customer_Information",
        "com.sfc.fosImpl.bizData.dataModel.Building_Mapping",
        "com.sfc.fosImpl.bizData.dataModel.Management_IP_List",
        "com.sfc.fosImpl.bizData.dataModel.DeviceRequest",
        "com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails",
        "com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails",
        "com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del"
    ];

    theClass.prototype.checkClassName = function(className) {
        for (var i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
            if (className == this.SUPPORTED_CLASSES[i])
                return;
        };
        throw "Factory com.sfc.fosImpl.bizData.dataModel.DataModelFactory does not support class \"" + className + "\"";
    };

    theClass.prototype.create = function(className, jsonData) {
        this.checkClassName(className);
        var instance = this.$loader.newInstance(className, this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData, this.context);
        return instance;
    };

    theClass.prototype.createTechnical_Information = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Technical_Information", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateTechnical_Information = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Technical_Information", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createEquipment_Details = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Equipment_Details", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateEquipment_Details = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Equipment_Details", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCustomer_Information = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Customer_Information", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCustomer_Information = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Customer_Information", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createBuilding_Mapping = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Building_Mapping", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateBuilding_Mapping = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Building_Mapping", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createManagement_IP_List = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Management_IP_List", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateManagement_IP_List = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Management_IP_List", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createDeviceRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.DeviceRequest", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateDeviceRequest = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.DeviceRequest", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCPEManagementIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCPEManagementIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createServiceIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateServiceIPDetails = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCustomer_Information_Del = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCustomer_Information_Del = function(jsonData) {
        var instance = this.$loader.newInstance("com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.getClass = function(className) {
        this.checkClassName(className);
        return this.$loader.getClass(className);
    };
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.DataModelFactory"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.Customer_Information. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Customer_Information"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.Customer_Information");
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
    theClass.ATTR_CTRENGINEER_PHNUMBER = "ctrEngineer_PhNumber";
    theClass.ATTR_STATE = "state";

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
        length: 200, 
		caseIdManual: true, 
		isSummary: true, 
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
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTNAME] = {
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
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
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
        length: 200, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOCATION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REGIONVIEW] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
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
        length: 100, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICETYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSearchable: true
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
        length: 100, 
		isSearchable: true
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
        length: 100, 
		isSearchable: true
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
        length: 100
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
        length: 10000
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 400
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
        length: 400, 
		isSummary: true
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
    theClass.TYPE_ARRAY[theClass.ATTR_CTRENGINEER_PHNUMBER] = {
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

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Customer_Information"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.Management_IP_List. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Management_IP_List"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.Management_IP_List");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CAPACITY = "capacity";
    theClass.ATTR_PORT_TYPE = "port_Type";
    theClass.ATTR_CARRIERIP = "carrierIP";
    theClass.ATTR_MANAGEMENT_VLAN = "management_VLAN";
    theClass.ATTR_CARRIEREQUIPMENTTYPE = "carrierEquipmentType";
    theClass.ATTR_COMMENTS = "comments";
    theClass.ATTR_PORT_NUMBER = "port_Number";
    theClass.ATTR_MANAGEMENT_CARRIER_IP = "management_Carrier_IP";
    theClass.ATTR_AGGREGATION_POINT = "aggregation_Point";
    theClass.ATTR_CARRIER_VLAN = "carrier_VLAN";

    theClass.TYPE_ARRAY = {};
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
    theClass.TYPE_ARRAY[theClass.ATTR_MANAGEMENT_VLAN] = {
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

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Management_IP_List"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails");
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

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.Technical_Information. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Technical_Information"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.Technical_Information");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CARRIERVLAN = "carrierVLAN";
    theClass.ATTR_CARRIERIP = "carrierIP";
    theClass.ATTR_AGGPOINT = "aggPoint";
    theClass.ATTR_PORT = "port";
    theClass.ATTR_CLIENTVLAN = "clientVLAN";
    theClass.ATTR_CLIENTIP = "clientIP";
    theClass.ATTR_SFCPOPPE = "SFCPOPPE";
    theClass.ATTR_PORTTYPE = "portType";
    theClass.ATTR_MODIFIEDBY = "modifiedBy";
    theClass.ATTR_MODIFIEDDATE = "modifiedDate";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_EQUIPMENT = "equipment";
    theClass.ATTR_RECORDSTATUS = "recordStatus";
    theClass.ATTR_MANAGEMENT_IP_INFO = "management_IP_Info";
    theClass.ATTR_IR_NUMBER = "IR_Number";
    theClass.ATTR_MRR = "MRR";
    theClass.ATTR_SECURITY = "security";
    theClass.ATTR_DEVICEREQUEST = "deviceRequest";
    theClass.ATTR_CLIENTNAME = "clientName";
    theClass.ATTR_CPEMANAGEMENTIPDETAILS = "CPEManagementIPDetails";
    theClass.ATTR_SERVICEIPDETAILS = "serviceIPDetails";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIERVLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CARRIERIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_AGGPOINT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PORT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTVLAN] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTIP] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 150, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SFCPOPPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 150, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PORTTYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 150, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MODIFIEDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
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
		caseIdManual: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EQUIPMENT] = {
        type: "com.sfc.fosImpl.bizData.dataModel.Equipment_Details",
        baseType: "com.sfc.fosImpl.bizData.dataModel.Equipment_Details",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RECORDSTATUS] = {
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
    theClass.TYPE_ARRAY[theClass.ATTR_MANAGEMENT_IP_INFO] = {
        type: "com.sfc.fosImpl.bizData.dataModel.Management_IP_List",
        baseType: "com.sfc.fosImpl.bizData.dataModel.Management_IP_List",
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
        type: "com.sfc.fosImpl.bizData.dataModel.DeviceRequest",
        baseType: "com.sfc.fosImpl.bizData.dataModel.DeviceRequest",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CPEMANAGEMENTIPDETAILS] = {
        type: "com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails",
        baseType: "com.sfc.fosImpl.bizData.dataModel.CPEManagementIPDetails",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICEIPDETAILS] = {
        type: "com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails",
        baseType: "com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
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

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Technical_Information"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLIENTIP = "clientIP";
    theClass.ATTR_CLIENTVLAN = "clientVLAN";
    theClass.ATTR_SFCPOPPE = "SFCPOPPE";

    theClass.TYPE_ARRAY = {};
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

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.ServiceIPDetails"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del");
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
    theClass.ATTR_CTRENGINEER_PHNUMBER = "ctrEngineer_PhNumber";
    theClass.ATTR_ACTIONBY = "actionBy";
    theClass.ATTR_ACTIVITYDATETIME = "activityDateTime";
    theClass.ATTR_STATE = "state";

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
        length: 200, 
		caseIdManual: true, 
		isSummary: true, 
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
        length: 200, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLIENTNAME] = {
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
    theClass.TYPE_ARRAY[theClass.ATTR_ACCOUNTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
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
        length: 200, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOCATION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REGIONVIEW] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 200
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
        length: 100, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SERVICETYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100, 
		isSearchable: true
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
        length: 100, 
		isSearchable: true
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
        length: 100, 
		isSearchable: true
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
        length: 100
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
        length: 10000
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 400
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
        length: 400, 
		isSummary: true
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
    theClass.TYPE_ARRAY[theClass.ATTR_CTRENGINEER_PHNUMBER] = {
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

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Customer_Information_Del"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.Equipment_Details. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Equipment_Details"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.Equipment_Details");
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

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Equipment_Details"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.DeviceRequest. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.DeviceRequest"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.DeviceRequest");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_DEVICENAME = "deviceName";
    theClass.ATTR_DEVICEDESCRIPTION = "deviceDescription";
    theClass.ATTR_QUANTITY = "quantity";
    theClass.ATTR_TYPE = "type";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_VLAN = "VLAN";
    theClass.ATTR_SFC_TAG_NUMBER = "SFC_Tag_Number";
    theClass.ATTR_SERIAL_NUMBER = "serial_Number";
    theClass.ATTR_IMEI = "IMEI";
    theClass.ATTR_IR_NUMBER = "IR_Number";
    theClass.ATTR_ADDEDBY = "addedBy";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";

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

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.DeviceRequest"]();
/*
 * This provides an implementation of the BOM class com.sfc.fosImpl.bizData.dataModel.Building_Mapping. 
 */
bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Building_Mapping"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.sfc.fosImpl.bizData.dataModel.Building_Mapping");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_BUILDINGCASEIDENTIFIER = "buildingCaseIdentifier";
    theClass.ATTR_BUILDING_ID = "building_ID";
    theClass.ATTR_BUILDING_NAME = "building_Name";
    theClass.ATTR_STATE = "state";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDINGCASEIDENTIFIER] = {
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
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDING_ID] = {
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
    theClass.TYPE_ARRAY[theClass.ATTR_BUILDING_NAME] = {
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

bpm.data.Loader.classDefiner["com.sfc.fosImpl.bizData.dataModel.Building_Mapping"]();
