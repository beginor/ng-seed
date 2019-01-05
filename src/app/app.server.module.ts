import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        ServerModule,
        ModuleMapLoaderModule,
        AppModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
