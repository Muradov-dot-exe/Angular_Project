import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseItemCardComponent } from './course-item-card/course-item-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { TableViewComponent } from './table-view/table-view.component';
import { CardListViewComponent } from './card-list-view/card-list-view.component';
import { CardItemComponent } from './card-item/card-item.component';
import { PostTdFormComponent } from './post-forms/post-td-form/post-td-form.component';
import { TableListComponent } from './table-list/table-list.component';
import { PostReactiveFormComponent } from './post-forms/post-reactive-form/post-reactive-form.component';
import { FieldErrorMessageComponent } from './field-error-message/field-error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    CourseItemCardComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ModelsComponent,
    ServicesComponent,
    TableViewComponent,
    CardListViewComponent,
    CardItemComponent,
    PostTdFormComponent,
    TableListComponent,
    PostReactiveFormComponent,
    FieldErrorMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
