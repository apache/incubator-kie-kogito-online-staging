var SCESIM_Module_Factory=function(){return{SCESIM:{name:"SCESIM",typeInfos:[{localName:"RawValueType",typeName:"rawValueType",propertyInfos:[{name:"value",type:"value"},{name:"clazz",attributeName:{localPart:"class"},type:"attribute"}]},{localName:"FactMappingValueType",propertyInfos:[{name:"factIdentifier",required:!0,elementName:{localPart:"factIdentifier"},typeInfo:".FactIdentifierType"},{name:"expressionIdentifier",required:!0,elementName:{localPart:"expressionIdentifier"},typeInfo:".ExpressionIdentifierType"},{name:"rawValue",elementName:{localPart:"rawValue"},typeInfo:".RawValueType"}]},{localName:"SimulationType",typeName:"simulationType",propertyInfos:[{name:"scesimModelDescriptor",required:!0,elementName:{localPart:"scesimModelDescriptor"},typeInfo:".ScesimModelDescriptorType"},{name:"scesimData",required:!0,elementName:{localPart:"scesimData"},typeInfo:".ScenariosType"}]},{localName:"BackgroundDatasType",typeName:"backgroundDatasType",propertyInfos:[{name:"backgroundData",minOccurs:0,collection:!0,elementName:{localPart:"BackgroundData"},typeInfo:".BackgroundDataType"}]},{localName:"ExpressionIdentifierType",typeName:"expressionIdentifierType",propertyInfos:[{name:"name",elementName:{localPart:"name"}},{name:"type",elementName:{localPart:"type"}}]},{localName:"FactIdentifierType",typeName:"factIdentifierType",propertyInfos:[{name:"name",elementName:{localPart:"name"}},{name:"className",elementName:{localPart:"className"}},{name:"importPrefix",attributeName:{localPart:"importPrefix"},type:"attribute"}]},{localName:"FactMappingType",propertyInfos:[{name:"expressionElements",required:!0,elementName:{localPart:"expressionElements"},typeInfo:".ExpressionElementsType"},{name:"expressionIdentifier",required:!0,elementName:{localPart:"expressionIdentifier"},typeInfo:".ExpressionIdentifierType"},{name:"factIdentifier",required:!0,elementName:{localPart:"factIdentifier"},typeInfo:".FactIdentifierType"},{name:"className",required:!0,elementName:{localPart:"className"}},{name:"factAlias",required:!0,elementName:{localPart:"factAlias"}},{name:"expressionAlias",elementName:{localPart:"expressionAlias"}},{name:"genericTypes",required:!0,elementName:{localPart:"genericTypes"},typeInfo:".GenericTypes"},{name:"columnWidth",required:!0,elementName:{localPart:"columnWidth"},typeInfo:"Double"},{name:"factMappingValueType",elementName:{localPart:"factMappingValueType"}}]},{localName:"SettingsType",typeName:"settingsType",propertyInfos:[{name:"dmoSession",elementName:{localPart:"dmoSession"}},{name:"dmnFilePath",elementName:{localPart:"dmnFilePath"}},{name:"type",elementName:{localPart:"type"}},{name:"fileName",elementName:{localPart:"fileName"}},{name:"kieSession",elementName:{localPart:"kieSession"}},{name:"kieBase",elementName:{localPart:"kieBase"}},{name:"ruleFlowGroup",elementName:{localPart:"ruleFlowGroup"}},{name:"dmnNamespace",elementName:{localPart:"dmnNamespace"}},{name:"dmnName",elementName:{localPart:"dmnName"}},{name:"skipFromBuild",elementName:{localPart:"skipFromBuild"},typeInfo:"Boolean"},{name:"stateless",elementName:{localPart:"stateless"},typeInfo:"Boolean"}]},{localName:"FactMappingsType",typeName:"factMappingsType",propertyInfos:[{name:"factMapping",minOccurs:0,collection:!0,elementName:{localPart:"FactMapping"},typeInfo:".FactMappingType"}]},{localName:"ExpressionElementType",propertyInfos:[{name:"step",required:!0,elementName:{localPart:"step"}}]},{localName:"GenericTypes",typeName:"genericTypes",propertyInfos:[{name:"string",minOccurs:0,collection:!0,elementName:{localPart:"string"}}]},{localName:"ScesimModelDescriptorType",typeName:"scesimModelDescriptorType",propertyInfos:[{name:"factMappings",elementName:{localPart:"factMappings"},typeInfo:".FactMappingsType"}]},{localName:"ScenariosType",typeName:"scenariosType",propertyInfos:[{name:"scenario",minOccurs:0,collection:!0,elementName:{localPart:"Scenario"},typeInfo:".ScenarioType"}]},{localName:"ScenarioSimulationModelType",propertyInfos:[{name:"simulation",required:!0,elementName:{localPart:"simulation"},typeInfo:".SimulationType"},{name:"background",required:!0,elementName:{localPart:"background"},typeInfo:".BackgroundType"},{name:"settings",required:!0,elementName:{localPart:"settings"},typeInfo:".SettingsType"},{name:"imports",required:!0,elementName:{localPart:"imports"},typeInfo:".ImportsType"},{name:"version",attributeName:{localPart:"version"},type:"attribute"}]},{localName:"WrappedImportsType",typeName:"wrappedImportsType",propertyInfos:[{name:"_import",minOccurs:0,collection:!0,elementName:{localPart:"Import"},typeInfo:".ImportType"}]},{localName:"ImportType",propertyInfos:[{name:"type",required:!0,elementName:{localPart:"type"}}]},{localName:"BackgroundType",typeName:"backgroundType",propertyInfos:[{name:"scesimModelDescriptor",required:!0,elementName:{localPart:"scesimModelDescriptor"},typeInfo:".ScesimModelDescriptorType"},{name:"scesimData",required:!0,elementName:{localPart:"scesimData"},typeInfo:".BackgroundDatasType"}]},{localName:"ExpressionElementsType",typeName:"expressionElementsType",propertyInfos:[{name:"expressionElement",required:!0,collection:!0,elementName:{localPart:"ExpressionElement"},typeInfo:".ExpressionElementType"}]},{localName:"ScenarioType",propertyInfos:[{name:"factMappingValues",required:!0,elementName:{localPart:"factMappingValues"},typeInfo:".FactMappingValuesType"}]},{localName:"BackgroundDataType",propertyInfos:[{name:"factMappingValues",required:!0,elementName:{localPart:"factMappingValues"},typeInfo:".FactMappingValuesType"}]},{localName:"ImportsType",typeName:"importsType",propertyInfos:[{name:"imports",elementName:{localPart:"imports"},typeInfo:".WrappedImportsType"}]},{localName:"FactMappingValuesType",typeName:"factMappingValuesType",propertyInfos:[{name:"factMappingValue",minOccurs:0,collection:!0,elementName:{localPart:"FactMappingValue"},typeInfo:".FactMappingValueType"}]}],elementInfos:[{typeInfo:".ScenarioSimulationModelType",elementName:{localPart:"ScenarioSimulationModel"}}]}}};if("function"==typeof define&&define.amd)define([],SCESIM_Module_Factory);else{var SCESIM_Module=SCESIM_Module_Factory();if("undefined"!=typeof module&&module.exports)module.exports.SCESIM=SCESIM_Module.SCESIM;else var SCESIM=SCESIM_Module.SCESIM}