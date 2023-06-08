import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CustomComponentsComponent } from './custom-components/custom-components.component';
import { CarouselModule } from './carousels/carousel.module';
import { AccordionModule } from './accordion/accordion.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';
import { StickyNoteModule } from './sticky-note/sticky-note.module';
import { ChatBotModule } from './chat-bot/chat-bot.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomButtonModule } from './custom-button/custom-button.module';

import { MenuCardModule } from './menu-card/menu-card.module';

import { TrelloModule } from './trello/trello.module';
import { ToggleButtonModule } from './toggle-button/toggle-button.module';
import { TowerBlockComponent } from './tower-block/tower-block.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { ChartJsModule } from './chart-js/chart-js.module';
import { TowerBlockModule } from './tower-block/tower-block.module';
import { TerrainComponent } from './terrain/terrain.component';



@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent,
        SpinnerComponent,
        NavbarComponent,
        CustomComponentsComponent,
        TerrainComponent,
        
     

     
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        AccordionModule,
        DragAndDropModule,
        StickyNoteModule,
        ChatBotModule,
        DragAndDropModule,
        CustomButtonModule,
        MenuCardModule,
        TrelloModule,
        ToggleButtonModule,
        ChartJsModule,
        TowerBlockModule

    ]
})
export class AppModule { }
