import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APIServiceService } from './apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productInfo';

  constructor(private http: HttpClient,
    private apiservice: APIServiceService) { }

  searchButton(){
    this.apiservice.searchAPI();
    console.log("button is clicked");
    
    // this.apiservice.searchAPI();
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      console.log(data);
    })

  }

    searchAPI(auth_token): Observable<any>{
    console.log("searchAPI service is called!")
    // prodName = URLEncoder.encode(prodName, "UTF-8");
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': '5OXmOCh9LJ6YJOkvhVHr3ATKb0RJPRrO'
    })

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '5OXmOCh9LJ6YJOkvhVHr3ATKb0RJPRrO'
      })
    };
    var snapUrl = "https://elastic.snaplogic.com/api/1/rest/slsched/feed/GEPowerWaterStaging";
    var url = snapUrl + "/GEWater/GEWater_SPG/SPG_PartsSearch_Task?"
        + "INPUT=%7B%22INPUT_SELECT_PARAM_IN%22%3A%7B%22Request%22%3A%7B%22Header%22%3A%7B%22material_name_makt_maktx%22%3A%22"
        + "material_name_makt_maktx%22%2C%22material_id_mvke_matnr%22%3A%22%22%2C%22sales_org_id_mvke_vkorg%22%3A%22%22%2C%22"
        + "name_vtext%22%3A%22%22%2C%22mfg_part_id_mara_mfrpn%22%3A%22%22%2C%22base_uom_name_t006a_mseht%22%3A%22%22%2C%22"
        + "sales_matl_status_id_mvke_vmsta%22%3A%22%22%2C%22product_prod%22%3A%22%22%2C%22sub_product_sprod%22%3A%22%22%2C%22"
        + "supplier_supp%22%3A%22%22%2C%22feed_rate_gph%22%3A%22%22%2C%22feed_rate_gpd%22%3A%22%22%2C%22feed_rate_lhr%22%3A%22%22%2C%22"
        + "sales_matl_status_name_tvmst_vmstb%22%3A%22%22%2C%22package_wt%22%3A%22%22%2C%22unit_of_measure_schme%22%3A%22%22%2C%22"
        + "min_order_qty_aumng%22%3A%22%22%2C%22SG_Density%22%3A%22%22%2C%22totalPkgWt%22%3A%22%22%2C%22salesUnit%22%3A%22%22%2C%22"
        + "material_group_id_mara_matkl%22%3A%20%22material_group_id_mara_matkl%22%7D%2C%22ParaValue%22%3A%5B%7B%22"
        + "PARAM_Maxprespsi%22%3A%22%22%2C%22PARAM_Supplier%22%3A%22%22%2C%22PARAM_SubProd%22%3A%22%22%2C%22PARAM_ChemClass%22%3A%22%22%2C%22"
        + "PARAM_APPNAME%22%3A%222%22%2C%22PARAM_Prod%22%3A%22%22%2C%22PARAM_SalesOrgPole%22%3A%22ALL%22%2C%22PARAM_Desc%22%3A%22%22%2C%22"
        + "PARAM_CFO_IND%22%3A%220%22%2C%22PARAM_Maxpresbar%22%3A%22%22%2C%22PARAM_FRgph%22%3A%22%22%2C%22PARAM_SalesOrg%22%3A%22%22%2C%22"
        + "PARAM_Keyword%22%3A%22%25"
        // + prodName 
        + "SN80"
        + "%25%22%2C%22PARAM_FRlhr%22%3A%22%22%2C%22PARAM_FRgpd%22%3A%22%22%2C%22PARAM_MaterialId%22%3A%22%22%7D%5D%7D%7D%7D";
        console.log("rest api lciked!")
        // result = spgService.snapLogicCommonUrl(url, this.bearer);
        // return this.http.get<[]>(url)
        //       .subscribe(data => {
        //           console.log("data", data);
        //       });

      // // Create an Observable that will create an AJAX request
      // const apiData = ajax('/api/data');
      // // Subscribe to create the request
      // apiData.subscribe(res => console.log(res.status, res.response));      
  }
}

