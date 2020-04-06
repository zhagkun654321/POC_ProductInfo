import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
// import { Subscription } from 'rxjs';
// import * as data from './apiServiceResult.json';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(
              // private subscription: Subscription,
              // private httpOptions: HttpHeaders
              ) {
      var url = 'https://elastic.snaplogic.com/api/1/rest/slsched/feed/GEPowerWaterStaging';
  }

  ngOnInit(){
    // console.log(data);
  }

  searchSampleAPI(){
    //   this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //   console.log(data);
    // });
  };

// //(1) Plastics web service
// var platicsServiceUrl =  this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Plastics_Task?generic_number=" + genericno; 
// plasticAPI(){
//   this.http.get<any>(platicsServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };


// //(2) search product on product info
// 			var searchUrl = this.snapUrl + "/GEWater/GEWater_SPG/SPG_PartsSearch_Task?"
// 					+ "INPUT=%7B%22INPUT_SELECT_PARAM_IN%22%3A%7B%22Request%22%3A%7B%22Header%22%3A%7B%22material_name_makt_maktx%22%3A%22"
// 					+ "material_name_makt_maktx%22%2C%22material_id_mvke_matnr%22%3A%22%22%2C%22sales_org_id_mvke_vkorg%22%3A%22%22%2C%22"
// 					+ "name_vtext%22%3A%22%22%2C%22mfg_part_id_mara_mfrpn%22%3A%22%22%2C%22base_uom_name_t006a_mseht%22%3A%22%22%2C%22"
// 					+ "sales_matl_status_id_mvke_vmsta%22%3A%22%22%2C%22product_prod%22%3A%22%22%2C%22sub_product_sprod%22%3A%22%22%2C%22"
// 					+ "supplier_supp%22%3A%22%22%2C%22feed_rate_gph%22%3A%22%22%2C%22feed_rate_gpd%22%3A%22%22%2C%22feed_rate_lhr%22%3A%22%22%2C%22"
// 					+ "sales_matl_status_name_tvmst_vmstb%22%3A%22%22%2C%22package_wt%22%3A%22%22%2C%22unit_of_measure_schme%22%3A%22%22%2C%22"
// 					+ "min_order_qty_aumng%22%3A%22%22%2C%22SG_Density%22%3A%22%22%2C%22totalPkgWt%22%3A%22%22%2C%22salesUnit%22%3A%22%22%2C%22"
// 					+ "material_group_id_mara_matkl%22%3A%20%22material_group_id_mara_matkl%22%7D%2C%22ParaValue%22%3A%5B%7B%22"
// 					+ "PARAM_Maxprespsi%22%3A%22%22%2C%22PARAM_Supplier%22%3A%22%22%2C%22PARAM_SubProd%22%3A%22%22%2C%22PARAM_ChemClass%22%3A%22%22%2C%22"
// 					+ "PARAM_APPNAME%22%3A%222%22%2C%22PARAM_Prod%22%3A%22%22%2C%22PARAM_SalesOrgPole%22%3A%22ALL%22%2C%22PARAM_Desc%22%3A%22%22%2C%22"
// 					+ "PARAM_CFO_IND%22%3A%220%22%2C%22PARAM_Maxpresbar%22%3A%22%22%2C%22PARAM_FRgph%22%3A%22%22%2C%22PARAM_SalesOrg%22%3A%22%22%2C%22"
// 					+ "PARAM_Keyword%22%3A%22%25"
// 					+ prodName 
// 					+ "%25%22%2C%22PARAM_FRlhr%22%3A%22%22%2C%22PARAM_FRgpd%22%3A%22%22%2C%22PARAM_MaterialId%22%3A%22%22%7D%5D%7D%7D%7D";
// searchAPI(){
//   this.http.get<any>(searchUrl).subscribe(data => {
//     console.log(data);
//   });
// };


// // (3)Corrosion web service
// var corrosionServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Corrosion_Task?generic_number=" + genericno;
// corrosionAPI(){
//   this.http.get<any>(corrosionServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// // (4)Elastomer web service
// var elasticServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Elastomers_Task?generic_number=" + genericno;
// elastomerAPI(){
//   this.http.get<any>(elasticServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// // (5)Containers web service
// var containerServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Container_Price_Task?matkl="+genericno+"&salesOrg="+salesOrg;
// containerAPI(){
//   this.http.get<any>(containerServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// // (6)Physical Properties web service
// var PhysicalServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Physprop_Task?generic_number=" + genericno;
// physicalAPI(){
//   this.http.get<any>(PhysicalServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// // (7)Regulatory web service
// var regulatoryServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Regulatory_Task?generic_number=" + genericno;
// regulatoryAPI(){
//   this.http.get<any>(regulatoryServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// // (8)state of matter web service
// var matterServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_MatterState_Task?generic_number=" + genericno;
// matterServiceAPI(){
//   this.http.get<any>(matterServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// // (9)Approvals web service
// var approvalServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Aprrovals_Task?generic_number=" + genericno;
// approvalServiceAPI(){
//   this.http.get<any>(approvalServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };

// //(11)Container type and status web service
// var containerServiceUrl = this.snapUrl + "/GEWater/GEWater_SPG/SPG_Search_fetchStatus_Task?generic_number="+genericno+"&vkorg="+salesOrg; 
// containerWebServiceAPI(){
//   this.http.get<any>(containerServiceUrl).subscribe(data => {
//     console.log(data);
//   });
// };


}

// package com.ge.water.webconfigurator.service;

// import java.net.URLEncoder;
// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.List;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;

// import com.ge.water.webconfigurator.beans.ProductActives;
// import com.ge.water.webconfigurator.beans.Regulatory;
// import com.ge.water.webconfigurator.dao.IProductActivesRepository;
// import com.ge.water.webconfigurator.dao.IRegulatoryRepository;

// @Service
// public class ProductInfoService {
// 	private final Logger log = LoggerFactory.getLogger(this.getClass());

// 	@Value("${snaplogic.url}")
// 	private String snapUrl;
// 	@Value("${snaplogic.bearer}")
// 	private String bearer;

// 	private IProductActivesRepository iProductActivesRepository;
// 	private IRegulatoryRepository iRegulatoryRepository;
// 	private SPGService spgService;

// 	@Autowired
// 	public ProductInfoService(SPGService spgService, IProductActivesRepository iProductActivesRepository,
// 			IRegulatoryRepository iRegulatoryRepository){
// 		this.iProductActivesRepository = iProductActivesRepository;
// 		this.iRegulatoryRepository = iRegulatoryRepository;
// 		this.spgService = spgService;
// 	}

// 	// Plastics web service
// 	public String getProductInfoPlastics(String genericno) {
// 		log.info("Entering ProductInfoService.getProductInfoPlastics()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Plastics_Task?generic_number=" + genericno;   // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoPlastics()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoPlastics() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// search product on product info
// 	public String searchProduct(String prodName){
// 		log.info("Entering ProductInfoService.searchProduct()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			prodName = URLEncoder.encode(prodName, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/SPG_PartsSearch_Task?"
// 					+ "INPUT=%7B%22INPUT_SELECT_PARAM_IN%22%3A%7B%22Request%22%3A%7B%22Header%22%3A%7B%22material_name_makt_maktx%22%3A%22"
// 					+ "material_name_makt_maktx%22%2C%22material_id_mvke_matnr%22%3A%22%22%2C%22sales_org_id_mvke_vkorg%22%3A%22%22%2C%22"
// 					+ "name_vtext%22%3A%22%22%2C%22mfg_part_id_mara_mfrpn%22%3A%22%22%2C%22base_uom_name_t006a_mseht%22%3A%22%22%2C%22"
// 					+ "sales_matl_status_id_mvke_vmsta%22%3A%22%22%2C%22product_prod%22%3A%22%22%2C%22sub_product_sprod%22%3A%22%22%2C%22"
// 					+ "supplier_supp%22%3A%22%22%2C%22feed_rate_gph%22%3A%22%22%2C%22feed_rate_gpd%22%3A%22%22%2C%22feed_rate_lhr%22%3A%22%22%2C%22"
// 					+ "sales_matl_status_name_tvmst_vmstb%22%3A%22%22%2C%22package_wt%22%3A%22%22%2C%22unit_of_measure_schme%22%3A%22%22%2C%22"
// 					+ "min_order_qty_aumng%22%3A%22%22%2C%22SG_Density%22%3A%22%22%2C%22totalPkgWt%22%3A%22%22%2C%22salesUnit%22%3A%22%22%2C%22"
// 					+ "material_group_id_mara_matkl%22%3A%20%22material_group_id_mara_matkl%22%7D%2C%22ParaValue%22%3A%5B%7B%22"
// 					+ "PARAM_Maxprespsi%22%3A%22%22%2C%22PARAM_Supplier%22%3A%22%22%2C%22PARAM_SubProd%22%3A%22%22%2C%22PARAM_ChemClass%22%3A%22%22%2C%22"
// 					+ "PARAM_APPNAME%22%3A%222%22%2C%22PARAM_Prod%22%3A%22%22%2C%22PARAM_SalesOrgPole%22%3A%22ALL%22%2C%22PARAM_Desc%22%3A%22%22%2C%22"
// 					+ "PARAM_CFO_IND%22%3A%220%22%2C%22PARAM_Maxpresbar%22%3A%22%22%2C%22PARAM_FRgph%22%3A%22%22%2C%22PARAM_SalesOrg%22%3A%22%22%2C%22"
// 					+ "PARAM_Keyword%22%3A%22%25"
// 					+ prodName 
// 					+ "%25%22%2C%22PARAM_FRlhr%22%3A%22%22%2C%22PARAM_FRgpd%22%3A%22%22%2C%22PARAM_MaterialId%22%3A%22%22%7D%5D%7D%7D%7D";
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.searchProduct()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.searchProduct() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Corrosion web service
// 	public String getProductInfoCorrosion(String genericno) {
// 		log.info("Entering ProductInfoService.getProductInfoCorrosion()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Corrosion_Task?generic_number=" + genericno;  // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoCorrosion()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoCorrosion() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Elastomer web service
// 	public String getProductInfoElastomers(String genericno) {
// 		log.info("Entering ProductInfoService.getProductInfoElastomers()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Elastomers_Task?generic_number=" + genericno; // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoElastomers()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoElastomers() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Containers web service
// 	public String getProductInfoContainersBookPrice(String genericno, String salesOrg) {
// 		log.info("Entering ProductInfoService.getProductInfoContainersBookPrice()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			salesOrg = URLEncoder.encode(salesOrg, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Container_Price_Task?matkl="+genericno+"&salesOrg="+salesOrg; // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoContainersBookPrice()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoContainersBookPrice() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Physical Properties web service
// 	public String getProductInfoPhysicalProperties(String genericno) {
// 		log.info("Entering ProductInfoService.getProductInfoPhysicalProperties()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Physprop_Task?generic_number=" + genericno; // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoPhysicalProperties()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoPhysicalProperties() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Regulatory web service
// 	public String getProductInfoRegulatory(String genericno) {
// 		log.info("Entering ProductInfoService.getProductInfoRegulatory()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Regulatory_Task?generic_number=" + genericno; // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoRegulatory()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoRegulatory() [" + result + "]");
// 		}
		
// 		/*
// 		 * List<Regulatory> regList = new ArrayList<Regulatory>(); for (Regulatory
// 		 * regData :
// 		 * this.iRegulatoryRepository.findByGenericId(Integer.parseInt(genericno))) {
// 		 * regList.add(regData); }
// 		 */
		
// 		return result;
// 	}

// 	// state of matter web service
// 	public String getProductInfoStateOfMatter(String genericno) {
// 		log.info("Entering ProductInfoService.getProductInfoStateOfMatter()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_MatterState_Task?generic_number=" + genericno; // changed url
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoStateOfMatter()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoStateOfMatter() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Approvals web service
// 	public String getProductInfoApprovals(String genericno){
// 		log.info("Entering ProductInfoService.getProductInfoStateOfMatter()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/Product_Info_Aprrovals_Task?generic_number=" + genericno; // changed url
// 			System.out.println("ProductInfoService.getProductInfoApprovals()");
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoStateOfMatter()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoStateOfMatter() [" + result + "]");
// 		}
// 		return result;
// 	}

// 	// Composition web service
// 	public List<ProductActives> getProductInfoComposition(Integer genericId) {
// 		List<ProductActives> compositionList = new ArrayList<ProductActives>();
// 		for (ProductActives productActives : this.iProductActivesRepository.findByGenericId(genericId)) {
// 			compositionList.add(productActives);
// 		}
// 		log.info("Returning Composition Product Info::" + Arrays.toString(compositionList.toArray()));
// 		return compositionList;
// 	}
	
// 	// Container type and status web service
// 	public String getProductInfoContainerTypeStatus(String genericno, String salesOrg){
// 		log.info("Entering ProductInfoService.getProductInfoContainerTypeStatus()...");
// 		String url = "";
// 		String result = "";
// 		try{
// 			genericno = URLEncoder.encode(genericno, "UTF-8");
// 			salesOrg = URLEncoder.encode(salesOrg, "UTF-8");
// 			url = this.snapUrl + "/GEWater/GEWater_SPG/SPG_Search_fetchStatus_Task?generic_number="+genericno+"&vkorg="+salesOrg; 
// 			result = spgService.snapLogicCommonUrl(url, this.bearer);
// 			log.info("Exiting ProductInfoService.getProductInfoContainerTypeStatus()...");
// 		} catch(Exception ex) {
// 			result = ex.getMessage();
// 			log.error("Error at ProductInfoService.getProductInfoContainerTypeStatus() [" + result + "]");
// 		}
// 		return result;
// 	}
// }
