/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM package com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaPackage.
 */

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaPackage"] = function() {
    /** Constructor. */
    var theClass = function() {
    };
    bpm.data.Loader.currentLoader.registerPackage(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaPackage");

};

bpm.scriptUtil._internal.checkVersionCompatibility("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.js", "11.0.0.044");
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaPackage"]();

/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM factory com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaFactory. 
 */ 

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaFactory"] = function() {
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
    bpm.data.Loader.currentLoader.registerFactory(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaFactory");

    theClass.prototype.SUPPORTED_CLASSES = [
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType",
        "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType"
    ];

    theClass.prototype.checkClassName = function(className) {
        for (var i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
            if (className == this.SUPPORTED_CLASSES[i])
                return;
        };
        throw "Factory com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaFactory does not support class \"" + className + "\"";
    };

    theClass.prototype.create = function(className, jsonData) {
        this.checkClassName(className);
        var instance = this.$loader.newInstance(className, this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData, this.context);
        return instance;
    };

    theClass.prototype.createHeaderType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateHeaderType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPlanItemType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePlanItemType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createUDFType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateUDFType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createRequestListType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateRequestListType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSendMailType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSendMailType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSentMailRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSentMailRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createUDFType1 = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateUDFType1 = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSendMailResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSendMailResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemAllocationType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemAllocationType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemAllocationRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemAllocationRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemListsType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemListsType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemsType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemsType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemAllocationResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemAllocationResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemFetchType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemFetchType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemFetchRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemFetchRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkItemFetchResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkItemFetchResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCreateresourceType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCreateresourceType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCreateresourceinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCreateresourceinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCreateresourcerequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCreateresourcerequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCreateresourceoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCreateresourceoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createFaultType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateFaultType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createFetchresourceType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateFetchresourceType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createFetchresourceinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateFetchresourceinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createFetchresourceoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateFetchresourceoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createResourceType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateResourceType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createGetprocessinstancesType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateGetprocessinstancesType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createGetprocessinstancesinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateGetprocessinstancesinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createGetprocessinstancesoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateGetprocessinstancesoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPi_completeType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePi_completeType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPi_startedType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePi_startedType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPi_haltedType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePi_haltedType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPi_cancelledType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePi_cancelledType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createLdapentryType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateLdapentryType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createLdapentryinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateLdapentryinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createLdapentryinputrepeatType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateLdapentryinputrepeatType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createInputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateInputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createNotifyPlanItemExecuteReplyType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateNotifyPlanItemExecuteReplyType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createNotifyPlanItemExecuteReplyRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateNotifyPlanItemExecuteReplyRequestType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createNotifyPlanItemExecuteReplyResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateNotifyPlanItemExecuteReplyResponseType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createParsecsvType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateParsecsvType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createUsersType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateUsersType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createReesourcecreationandmappingType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateReesourcecreationandmappingType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createReportgenerationType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateReportgenerationType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSearchprocessinstancesType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSearchprocessinstancesType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSearchprocessinstancesinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSearchprocessinstancesinputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSearchprocessinstancesoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSearchprocessinstancesoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createSearchrecordType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateSearchrecordType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createRootType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateRootType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkitemcompletionType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkitemcompletionType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkitemcompletioninputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkitemcompletioninputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createWorkitemcompletionoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateWorkitemcompletionoutputType = function(jsonData) {
        var instance = this.$loader.newInstance("com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.getClass = function(className) {
        this.checkClassName(className);
        return this.$loader.getClass(className);
    };
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SchemaFactory"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PI_COMPLETE = "pi_complete";
    theClass.ATTR_PI_STARTED = "pi_started";
    theClass.ATTR_PI_HALTED = "pi_halted";
    theClass.ATTR_PI_CANCELLED = "pi_cancelled";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PI_COMPLETE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PI_STARTED] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PI_HALTED] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PI_CANCELLED] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESS_INSTANCE = "process_instance";
    theClass.ATTR_CUSTOMER_NAME = "customer_name";
    theClass.ATTR_SIBELCIRCUIT_ID = "sibelcircuit_id";
    theClass.ATTR_PROJECTMANAGER = "projectmanager";
    theClass.ATTR_CUR_ACTIVITY = "cur_activity";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_EXEC_MILLS = "exec_mills";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESS_INSTANCE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMER_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIBELCIRCUIT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUR_ACTIVITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EXEC_MILLS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_startedType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType");
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAVOUR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VALUE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SEARCHKEY = "searchkey";
    theClass.ATTR_SEARCHVALUE = "searchvalue";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SEARCHKEY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SEARCHVALUE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_OUTPUTMESSAGE = "outputmessage";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_OUTPUTMESSAGE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_FETCHRESOURCEINPUT = "fetchresourceinput";
    theClass.ATTR_FETCHRESOURCEOUTPUT = "fetchresourceoutput";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_FETCHRESOURCEINPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FETCHRESOURCEOUTPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_NOTIFYPLANITEMEXECUTEREPLYREQUEST = "notifyPlanItemExecuteReplyRequest";
    theClass.ATTR_NOTIFYPLANITEMEXECUTEREPLYRESPONSE = "notifyPlanItemExecuteReplyResponse";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_NOTIFYPLANITEMEXECUTEREPLYREQUEST] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NOTIFYPLANITEMEXECUTEREPLYRESPONSE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_FIRSTNAME = "firstname";
    theClass.ATTR_LASTNAME = "lastname";
    theClass.ATTR_LOGINNAME = "loginName";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_PASSWORD = "password";
    theClass.ATTR_ORGMODELNAME = "orgmodelname";
    theClass.ATTR_FLAG = "flag";
    theClass.ATTR_ENTITY = "entity";
    theClass.ATTR_ADDBY = "addby";
    theClass.ATTR_RESPONSE = "response";
    theClass.ATTR_MOBILENUMBER = "mobileNumber";
    theClass.ATTR_FIELD1 = "field1";
    theClass.ATTR_FIELD2 = "field2";
    theClass.ATTR_FIELD3 = "field3";
    theClass.ATTR_FIELD4 = "field4";
    theClass.ATTR_FIELD5 = "field5";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_FIRSTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LOGINNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PASSWORD] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORGMODELNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENTITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RESPONSE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MOBILENUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD1] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD2] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD3] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD4] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD5] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESSNAME = "processName";
    theClass.ATTR_CUSTOMERNAME = "customerName";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_TASKNAME = "taskName";
    theClass.ATTR_CURRENTLYALLOCATED = "currentlyAllocated";
    theClass.ATTR_WORKITEMID = "workItemID";
    theClass.ATTR_ALLOCATETO = "allocateTo";
    theClass.ATTR_STATUS = "status";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMERNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TASKNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CURRENTLYALLOCATED] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ALLOCATETO] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_FETCHRESOURCE = "fetchresource";
    theClass.ATTR_REPORTGENERATION = "reportgeneration";
    theClass.ATTR_REESOURCECREATIONANDMAPPING = "reesourcecreationandmapping";
    theClass.ATTR_WORKITEMCOMPLETION = "workitemcompletion";
    theClass.ATTR_FAULT = "fault";
    theClass.ATTR_NOTIFYPLANITEMEXECUTEREPLY = "notifyPlanItemExecuteReply";
    theClass.ATTR_WORKITEMFETCH = "workItemFetch";
    theClass.ATTR_WORKITEMALLOCATION = "workItemAllocation";
    theClass.ATTR_SENDMAIL = "sendMail";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_FETCHRESOURCE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REPORTGENERATION] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_REESOURCECREATIONANDMAPPING] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMCOMPLETION] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FAULT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NOTIFYPLANITEMEXECUTEREPLY] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMFETCH] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMALLOCATION] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SENDMAIL] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.rootType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMLISTS = "workItemLists";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMLISTS] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMLISTS = "workItemLists";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMLISTS] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_FAULTMESSAGE = "faultmessage";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_FAULTMESSAGE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.faultType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESS_INSTANCE = "process_instance";
    theClass.ATTR_CUSTOMER_NAME = "customer_name";
    theClass.ATTR_SIBELCIRCUIT_ID = "sibelcircuit_id";
    theClass.ATTR_PROJECTMANAGER = "projectmanager";
    theClass.ATTR_CUR_ACTIVITY = "cur_activity";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_EXEC_MILLS = "exec_mills";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESS_INSTANCE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMER_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIBELCIRCUIT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUR_ACTIVITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EXEC_MILLS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESSNAME = "processname";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_RESOURCENAME = "resourceName";
    theClass.ATTR_RESOURCEGUID = "resourceGUID";
    theClass.ATTR_PROJECTMANAGER = "projectManager";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_RESOURCENAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RESOURCEGUID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROJECTMANAGER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMLISTS = "workItemLists";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMLISTS] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMCOMPLETIONINPUT = "workitemcompletioninput";
    theClass.ATTR_WORKITEMCOMPLETIONOUTPUT = "workitemcompletionoutput";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMCOMPLETIONINPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMCOMPLETIONOUTPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionoutputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletionType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_NAME = "name";
    theClass.ATTR_ORGNAME = "orgname";
    theClass.ATTR_FLAG = "flag";
    theClass.ATTR_ENTITYNAME = "entityname";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_PASSWORD = "password";
    theClass.ATTR_ADDBY = "addby";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORGNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENTITYNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PASSWORD] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SIBELCIRCUITID = "sibelcircuitid";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SIBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.workitemcompletioninputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_UDF = "UDF";
    theClass.ATTR_PLANITEMID = "planItemId";
    theClass.ATTR_RESULTCODE = "resultCode";
    theClass.ATTR_RESULTMESSAGE = "resultMessage";
    theClass.ATTR_ISERROR = "isError";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_UDF] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType",
        primitive: false,
        multivalued: true,
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RESULTCODE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RESULTMESSAGE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ISERROR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_FIRSTNAME = "firstname";
    theClass.ATTR_LASTNAME = "lastname";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_PASSWORD = "password";
    theClass.ATTR_ORGMODELNAME = "orgmodelname";
    theClass.ATTR_FLAG = "flag";
    theClass.ATTR_ENTITY = "entity";
    theClass.ATTR_ADDBY = "addby";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_FIRSTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LASTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PASSWORD] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORGMODELNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENTITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_OUTPUTMESSAGE = "outputmessage";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_OUTPUTMESSAGE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMFETCHREQUEST = "workItemFetchRequest";
    theClass.ATTR_WORKITEMFETCHRESPONSE = "workItemFetchResponse";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMFETCHREQUEST] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMFETCHRESPONSE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchResponseType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMS = "workItems";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMS] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemsType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemListsType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_LDAPENTRYINPUT = "ldapentryinput";
    theClass.ATTR_LDAPENTRYOUTPUT = "ldapentryoutput";
    theClass.ATTR_LDAPENTRYINPUTREPEAT = "ldapentryinputrepeat";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_LDAPENTRYINPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LDAPENTRYOUTPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryoutputType",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LDAPENTRYINPUTREPEAT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_GETPROCESSINSTANCESINPUT = "getprocessinstancesinput";
    theClass.ATTR_GETPROCESSINSTANCESOUTPUT = "getprocessinstancesoutput";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_GETPROCESSINSTANCESINPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesinputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_GETPROCESSINSTANCESOUTPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesoutputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CREATERESOURCE = "createresource";
    theClass.ATTR_LDAPENTRY = "ldapentry";
    theClass.ATTR_PARSECSV = "parsecsv";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CREATERESOURCE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LDAPENTRY] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PARSECSV] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reesourcecreationandmappingType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_NAME = "name";
    theClass.ATTR_VALUE = "value";
    theClass.ATTR_FLAVOUR = "flavour";
    theClass.ATTR_TYPE = "type";
    theClass.ATTR_EVALUATIONTYPE = "evaluationType";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VALUE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAVOUR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EVALUATIONTYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_USERS = "users";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_USERS] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.usersType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.parsecsvType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_RESPONSEMESSAGE = "responseMessage";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_RESPONSEMESSAGE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyResponseType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PLANID = "planId";
    theClass.ATTR_ORDERID = "orderId";
    theClass.ATTR_ORDERREFNUMBER = "orderRefNumber";
    theClass.ATTR_CORELATIONID = "coRelationId";
    theClass.ATTR_BUSSINESSTRANSACTIONID = "bussinessTransactionId";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PLANID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORDERID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORDERREFNUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CORELATIONID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_BUSSINESSTRANSACTIONID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_GUID = "guid";
    theClass.ATTR_LABEL = "label";
    theClass.ATTR_NAME = "name";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_GUID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_LABEL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_HEADER = "header";
    theClass.ATTR_PLANITEM = "planItem";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_HEADER] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.HeaderType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PLANITEM] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.PlanItemType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.notifyPlanItemExecuteReplyRequestType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_GETPROCESSINSTANCES = "getprocessinstances";
    theClass.ATTR_SEARCHPROCESSINSTANCES = "searchprocessinstances";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_GETPROCESSINSTANCES] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.getprocessinstancesType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SEARCHPROCESSINSTANCES] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.reportgenerationType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_TOFIELD = "toField";
    theClass.ATTR_PROCESS = "process";
    theClass.ATTR_EMAILTYPE = "emailType";
    theClass.ATTR_SIEBELCIRCUITID = "siebelCircuitID";
    theClass.ATTR_UDF = "UDF";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_TOFIELD] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAILTYPE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIEBELCIRCUITID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_UDF] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.UDFType1",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESS_INSTANCE = "process_instance";
    theClass.ATTR_CUSTOMER_NAME = "customer_name";
    theClass.ATTR_SIBELCIRCUIT_ID = "sibelcircuit_id";
    theClass.ATTR_PROJECTMANAGER = "projectmanager";
    theClass.ATTR_CUR_ACTIVITY = "cur_activity";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_EXEC_MILLS = "exec_mills";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESS_INSTANCE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMER_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIBELCIRCUIT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUR_ACTIVITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EXEC_MILLS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_cancelledType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESS_INSTANCE = "process_instance";
    theClass.ATTR_CUSTOMER_NAME = "customer_name";
    theClass.ATTR_SIBELCIRCUIT_ID = "sibelcircuit_id";
    theClass.ATTR_PROJECTMANAGER = "projectmanager";
    theClass.ATTR_CUR_ACTIVITY = "cur_activity";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_EXEC_MILLS = "exec_mills";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESS_INSTANCE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMER_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIBELCIRCUIT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUR_ACTIVITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EXEC_MILLS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_haltedType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_RESOURCE = "resource";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_RESOURCE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.resourceType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceoutputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_INPUT = "input";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_INPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.inputType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.ldapentryinputrepeatType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_REQUESTLIST = "requestList";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_REQUESTLIST] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.RequestListType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemFetchRequestType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SEARCHPROCESSINSTANCESINPUT = "searchprocessinstancesinput";
    theClass.ATTR_SEARCHPROCESSINSTANCESOUTPUT = "searchprocessinstancesoutput";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SEARCHPROCESSINSTANCESINPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesinputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SEARCHPROCESSINSTANCESOUTPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CREATERESOURCEINPUT = "createresourceinput";
    theClass.ATTR_CREATERESOURCEOUTPUT = "createresourceoutput";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CREATERESOURCEINPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CREATERESOURCEOUTPUT] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceoutputType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESSNAME = "processname";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESSNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.fetchresourceinputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_WORKITEMALLOCATIONREQUEST = "workItemAllocationRequest";
    theClass.ATTR_WORKITEMALLOCATIONRESPONSE = "workItemAllocationResponse";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMALLOCATIONREQUEST] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationRequestType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_WORKITEMALLOCATIONRESPONSE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationResponseType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.WorkItemAllocationType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_STATUS = "status";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SEARCHRECORD = "searchrecord";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SEARCHRECORD] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchrecordType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.searchprocessinstancesoutputType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_SENTMAILREQUEST = "sentMailRequest";
    theClass.ATTR_SENDMAILRESPONSE = "sendMailResponse";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_SENTMAILREQUEST] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SentMailRequestType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SENDMAILRESPONSE] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailResponseType",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.SendMailType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_PROCESS_INSTANCE = "process_instance";
    theClass.ATTR_CUSTOMER_NAME = "customer_name";
    theClass.ATTR_SIBELCIRCUIT_ID = "sibelcircuit_id";
    theClass.ATTR_PROJECTMANAGER = "projectmanager";
    theClass.ATTR_CUR_ACTIVITY = "cur_activity";
    theClass.ATTR_STATUS = "status";
    theClass.ATTR_EXEC_MILLS = "exec_mills";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_PROCESS_INSTANCE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUSTOMER_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SIBELCIRCUIT_ID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
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
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CUR_ACTIVITY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STATUS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EXEC_MILLS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.pi_completeType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_NAME = "name";
    theClass.ATTR_ORGNAME = "orgname";
    theClass.ATTR_FLAG = "flag";
    theClass.ATTR_ENTITYNAME = "entityname";
    theClass.ATTR_EMAIL = "email";
    theClass.ATTR_PASSWORD = "password";
    theClass.ATTR_ADDBY = "addby";
    theClass.ATTR_ACTION = "action";
    theClass.ATTR_RESULT = "result";
    theClass.ATTR_MOBILENUMBER = "mobileNumber";
    theClass.ATTR_FIELD1 = "field1";
    theClass.ATTR_FIELD2 = "field2";
    theClass.ATTR_FIELD3 = "field3";
    theClass.ATTR_FIELD4 = "field4";
    theClass.ATTR_FIELD5 = "field5";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_NAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORGNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FLAG] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENTITYNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EMAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_PASSWORD] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDBY] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ACTION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_RESULT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MOBILENUMBER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD1] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD2] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD3] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD4] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIELD5] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType"]();
/*
 * This provides an implementation of the BOM class com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType. 
 */
bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CREATERESOURCEREQUEST = "createresourcerequest";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CREATERESOURCEREQUEST] = {
        type: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType",
        baseType: "com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourcerequestType",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.tibco.schemas.SFC_FOS_BPM.SharedResources.SchemaDefinitions.Schema.createresourceinputType"]();
