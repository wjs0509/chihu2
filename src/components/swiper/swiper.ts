import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the SwiperComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var $: any;
declare var Swiper: any;
@Component({
  selector: 'swiper',
  templateUrl: 'swiper.html'
})
export class SwiperComponent implements OnInit {

  //存储swiper对象
  oSwiper: any = null;

  constructor() {
    
  }

  ngOnInit(){
    this.oSwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      // 如果需要分页器
      pagination: '.swiper-pagination',
    });
  }

}
