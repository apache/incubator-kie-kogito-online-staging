var KIE_Module_Factory=function(){return{KIE:{name:"KIE",defaultElementNamespaceURI:"http://www.drools.org/kie/dmn/1.2",typeInfos:[{localName:"TComponentWidths",typeName:"tComponentWidths",propertyInfos:[{name:"width",minOccurs:0,collection:!0,typeInfo:"Float"},{name:"dmnElementRef",attributeName:{localPart:"dmnElementRef"},type:"attribute"}]},{localName:"TComponentsWidthsExtension",typeName:"tComponentsWidthsExtension",propertyInfos:[{name:"componentWidths",minOccurs:0,collection:!0,elementName:"ComponentWidths",typeInfo:".TComponentWidths"}]},{localName:"TAttachment",typeName:"tAttachment",propertyInfos:[{name:"url",attributeName:{localPart:"url"},type:"attribute"},{name:"name",attributeName:{localPart:"name"},type:"attribute"}]}],elementInfos:[{typeInfo:".TComponentWidths",elementName:"ComponentWidths"},{typeInfo:".TComponentsWidthsExtension",elementName:"ComponentsWidthsExtension"},{typeInfo:".TAttachment",elementName:"attachment"}]}}};if("function"==typeof define&&define.amd)define([],KIE_Module_Factory);else{var KIE_Module=KIE_Module_Factory();if("undefined"!=typeof module&&module.exports)module.exports.KIE=KIE_Module.KIE;else var KIE=KIE_Module.KIE}