define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\">\n  <div class=\"component__header-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "\n    "
    + alias3(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":29}}}) : helper)))
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__title "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "<div class=\"component__title-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":15,"column":41},"end":{"line":15,"column":65}}}))
    + "__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":79},"end":{"line":15,"column":147}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":36}}})) != null ? stack1 : "")
    + "</div>\n\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":56}}}))
    + "__body\">\n      <div class=\"component__body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":26,"column":40},"end":{"line":26,"column":64}}}))
    + "__body-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__instruction "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":33,"column":39},"end":{"line":33,"column":63}}}))
    + "__instruction\">\n      <div class=\"component__instruction-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":34,"column":47},"end":{"line":34,"column":71}}}))
    + "__instruction-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":33}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":42,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"article__header\">\n    <div class=\"article__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"article__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":41},"end":{"line":17,"column":109}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__body\">\n        <div class=\"article__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__instruction\">\n        <div class=\"article__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"article__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"block__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"block__header\">\n    <div class=\"block__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"block__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":107}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__body\">\n        <div class=\"block__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__instruction\">\n        <div class=\"block__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"block__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":117},"end":{"line":3,"column":278}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"js-answer-live-region aria-label\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn__response-container\">\n\n  <div class=\"btn__marking js-btn-marking u-display-none\" aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"all","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":70},"end":{"line":3,"column":286}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"icon\" aria-hidden=\"true\"></div>\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_canShowModelAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n  <button class=\"btn-text btn__feedback js-btn-feedback is-disabled\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" aria-disabled=\"true\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__inner\">\n\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1), depth0))
    + "</span>\n\n  <div class=\"drawer__holder js-drawer-holder\"></div>\n\n  <div class=\"drawer__toolbar u-clearfix\">\n\n    <div class=\"drawer__back\">\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n    </div>\n\n    <div class=\"drawer__close\">\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n    </div>\n\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__menu-title drawer__item-title\">\n      <div class=\"drawer__menu-title-inner drawer__item-title-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__menu-body drawer__item-body\">\n      <div class=\"drawer__menu-body-inner drawer__item-body-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__menu-inner drawer__item-inner\" role=\"listitem\">\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"className") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":55},"end":{"line":10,"column":74}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":76}}})) != null ? stack1 : "")
    + "\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":81}}})) != null ? stack1 : "")
    + ">\n\n  <span class=\"aria-label\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading js-loading\">\n  <div class=\"loading__inner\">\n    Loading...\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"btn-text nav__btn nav__skip-btn\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\">\n      "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"nav__inner u-clearfix\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn u-display-none\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" role=\"link\">\n    <div class=\"icon\"></div>\n  </button>\n\n  <button class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn\" data-event=\"toggleDrawer\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\">\n    <div class=\"icon\"></div>\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":122},"end":{"line":4,"column":134}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__icon\">\n          <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":118}}})) != null ? stack1 : "")
    + "\"></div>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__title\" id=\"notify-heading\">\n          <div class=\"notify__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":18,"column":43},"end":{"line":18,"column":76}}})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__body\">\n          <div class=\"notify__body-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":30}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n          <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":34,"column":97},"end":{"line":34,"column":114}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n        </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":46,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":43,"column":99},"end":{"line":43,"column":117}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":43,"column":131},"end":{"line":43,"column":147}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":4},"end":{"line":59,"column":15}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n      <div class=\"icon\"></div>\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup notify__popup-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":96},"end":{"line":4,"column":105}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"notify__popup-inner\">\n\n    <div class=\"notify__content\">\n      <div class=\"notify__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":60,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":64,"column":2},"end":{"line":64,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__title\">\n    <div class=\"notify-push__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":75}}})) != null ? stack1 : "")
    + ">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__body\">\n    <div class=\"notify-push__body-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div id=\"notify-push-heading\" class=\"notify-push__inner js-notify-push-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n\n<button class=\"btn-icon notify-push__close-btn js-notify-push-close-btn\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n  <div class=\"icon\"></div>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"page__header\">\n    <div class=\"page__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":42,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"page__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":106}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__subtitle\">\n        <div class=\"page__subtitle-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__body\">\n        <div class=\"page__body-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":28}}})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__instruction\">\n        <div class=\"page__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"page__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":54,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"article__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":68}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":68},"end":{"line":8,"column":104}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":118},"end":{"line":8,"column":128}}}) : helper)))
    + "\">\n\n      <button id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":39}}}) : helper)))
    + "-accordion-button\" class=\"accordion__item-btn js-toggle-item is-closed"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":145}}})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\">\n        <div class=\"accordion__item-btn-inner\">\n\n          <div class=\"accordion__item-icon\">\n            <div class=\"icon\"></div>\n          </div>\n\n          <div class=\"accordion__item-title\">\n            <div class=\"accordion__item-title-inner\">\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":14},"end":{"line":19,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n\n        </div>\n      </button>\n\n      <div class=\"accordion__item-content\" role=\"region\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":85},"end":{"line":26,"column":95}}}) : helper)))
    + "-accordion-button\">\n        <div class=\"accordion__item-content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":50,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":97}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-body\">\n            <div class=\"accordion__item-body-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":32,"column":14},"end":{"line":32,"column":32}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":53},"end":{"line":38,"column":104}}})) != null ? stack1 : "")
    + "\">\n            <img class=\"accordion__item-image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":39,"column":70},"end":{"line":39,"column":152}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":47,"column":19}}})) != null ? stack1 : "")
    + "\n          </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"15":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"component__attribution accordion__attribution\">\n              <div class=\"component__attribution-inner accordion__attribution-inner\">\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner accordion__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget accordion__widget\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":56,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":9,"column":178},"end":{"line":9,"column":219}}})) != null ? stack1 : "")
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component__attribution graphic__attribution\">\n        <div class=\"component__attribution-inner graphic__attribution-inner\">\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner graphic__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget graphic__widget\">\n\n    <div class=\"graphic__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":91}}})) != null ? stack1 : "")
    + "\">\n\n      <img class=\"graphic__image js-graphic-set-image-src\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" data-large=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1), depth0))
    + "\" data-small=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"small") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":146},"end":{"line":9,"column":253}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":77},"end":{"line":5,"column":192}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":149},"end":{"line":5,"column":185}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"mcq__item js-mcq-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":53}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":179}}})) != null ? stack1 : "")
    + "\">\n\n      <input class=\"mcq__item-input js-item-input\" id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "-input\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":84},"end":{"line":10,"column":133}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":140},"end":{"line":10,"column":187}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":188},"end":{"line":10,"column":233}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"a11y_normalize")||(depth0 && lookupProperty(depth0,"a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":10,"column":246},"end":{"line":10,"column":271}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":10,"column":291},"end":{"line":10,"column":301}}}) : helper)))
    + "\" />\n\n      <label class=\"mcq__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":49},"end":{"line":12,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":97},"end":{"line":12,"column":135}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":172},"end":{"line":12,"column":182}}}) : helper)))
    + "-input\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":208},"end":{"line":12,"column":218}}}) : helper)))
    + "\" >\n\n        <div class=\"mcq__item-state\">\n          <div class=\"mcq__item-icon mcq__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(28, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":58},"end":{"line":15,"column":113}}})) != null ? stack1 : "")
    + "\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"mcq__item-icon mcq__item-correct-icon\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"mcq__item-icon mcq__item-incorrect-icon\">\n            <div class=\"icon\"></div>\n          </div>\n        </div>\n\n        <div class=\"mcq__item-text\">\n          <div class=\"mcq__item-text-inner\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n\n      </label>\n\n    </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":168}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":161}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"28":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner mcq__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget mcq__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":203}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRadio") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":211},"end":{"line":5,"column":257}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner text__inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["mygame"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":83},"end":{"line":6,"column":198}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":155},"end":{"line":6,"column":191}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner textinput__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget textinput__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":209}}})) != null ? stack1 : "")
    + "\">\n\n      <label class=\"textinput__item-prefix\" id=\"answer-label\" for=\"answer\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"prefix") || (depth0 != null ? lookupProperty(depth0,"prefix") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n      </label>\n      <input class=\"textinput__item-textbox js-textinput-textbox\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":11,"column":91},"end":{"line":11,"column":108}}}) : helper))) != null ? stack1 : "")
    + "\" data-id=\"input-answer\" id=\"answer\" value=\"\">\n\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["boxMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu__header boxmenu__header\">\n    <div class=\"menu__header-inner boxmenu__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":37,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__title boxmenu__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"menu__title-inner boxmenu__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":124}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__subtitle boxmenu__subtitle\">\n        <div class=\"menu__subtitle-inner boxmenu__subtitle-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__body boxmenu__body\">\n        <div class=\"menu__body-inner boxmenu__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":34,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__instruction boxmenu__instruction\">\n        <div class=\"menu__instruction-inner boxmenu__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu__inner boxmenu__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu__item-container boxmenu__item-container\">\n    <div class=\"menu__item-container-inner boxmenu__item-container-inner js-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuGroup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__title boxmenu-group__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuGroup\"></div>\n\n        <div class=\"menu-group__title-inner boxmenu-group__title-inner accessible-text-block\" aria-hidden=\"true\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__body boxmenu-group__body\">\n        <div class=\"menu-group__body-inner boxmenu-group__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__instruction boxmenu-group__instruction\">\n        <div class=\"menu-group__instruction-inner boxmenu-group__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-group__inner boxmenu-group__inner\">\n\n  <div class=\"menu-group__header boxmenu-group__header\">\n    <div class=\"menu-group__header-inner boxmenu-group__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"menu-group__progress boxmenu-group__progress js-menu-item-progress\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"menu-group__container boxmenu-group__container\">\n    <div class=\"menu-group__item-container-inner boxmenu-group__item-container-inner js-group-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu-item__image-container boxmenu-item__image-container\">\n    <img class=\"menu-item__image boxmenu-item__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\">\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__title boxmenu-item__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n\n        <div class=\"menu-item__title-inner boxmenu-item__title-inner\" aria-hidden=\"true\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":58}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__body boxmenu-item__body\">\n        <div class=\"menu-item__body-inner boxmenu-item__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__duration boxmenu-item__duration\">\n        <div class=\"menu-item__duration-inner boxmenu-item__duration-inner\">\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":105}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":37,"column":106},"end":{"line":37,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-item__inner boxmenu-item__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu-item__details boxmenu-item__details\">\n    <div class=\"menu-item__details-inner boxmenu-item__details-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":65}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"menu-item__progress boxmenu-item__progress js-menu-item-progress\">\n      </div>\n\n      <div class=\"menu-item__button-container boxmenu-item__button-container\">\n        <button class=\"btn-text menu-item__button boxmenu-item__button js-btn-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":83},"end":{"line":47,"column":119}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":119},"end":{"line":47,"column":153}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":167},"end":{"line":47,"column":239}}})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":47,"column":240},"end":{"line":47,"column":252}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":253},"end":{"line":47,"column":297}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":48,"column":10},"end":{"line":48,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

return this["Handlebars"];

});