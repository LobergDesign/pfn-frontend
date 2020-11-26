import { Vue, Component } from "nuxt-property-decorator";

@Component({
    name: "headerComponent"
})
export default class HeaderComponent extends Vue {
   mounted(){
       console.debug("header");
   }
}
