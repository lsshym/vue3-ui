---
to: lib/<%= name %>/index.ts
---
import <%= h.changeCase.upperCaseFirst(name) %> from "./src/<%= name %>.vue";

<%= h.changeCase.upperCaseFirst(name) %>.install = (app: any) => {
    app.component(<%= h.changeCase.upperCaseFirst(name) %>.name, <%= h.changeCase.upperCaseFirst(name) %>);
};

export default <%= h.changeCase.upperCaseFirst(name) %>;



