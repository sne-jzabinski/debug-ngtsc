import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewComponent } from "./new.cmpnt";

@NgModule({
    // imports: [CommonModule],
    declarations: [NewComponent],
    exports: [NewComponent]
})
export class NewModule { }
