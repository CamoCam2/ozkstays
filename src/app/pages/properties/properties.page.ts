import {Component, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {BreakpointObserver} from '@angular/cdk/layout';
import SwiperCore, {Autoplay, Keyboard, Navigation, Pagination, Scrollbar, SwiperOptions, Virtual, Zoom} from 'swiper';
import { IonicSlides } from '@ionic/angular';
import {SwiperComponent} from 'swiper/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  properties = [
    { name: 'Deer Valley',
      location: 'Branson, MO',
      description: 'Gorgeous modern farmhouse with a loft perfect for the kids!' +
        ' Deer Valley is in an unbeatable location right by the 76 Strip which is visible from the back deck! ' +
        '      It is the last house on a dead end street, which provides plenty of privacy.' +
        '      It features 2 bedrooms with 1 bathroom.  Each bedroom has a queen bed and full closet.' +
        'The main living area features an open floor plan with a full kitchen and large dining table, two couches and a Smart TV! ' +
        'The loft has two twin beds, bean bags, games and a tv! ' +
        'You can also do your laundry in the provided washer and dryer!',
      images: ['/assets/images/DeerValley.jpg', '/assets/images/DeerValleyLivingRoom.jpg', '/assets/images/DeerValleyLivingRoomKitchen.jpg',
        '/assets/images/DeerValleyKitchen.jpg', '/assets/images/DeerValleyRoom1.jpg', '/assets/images/DeerValleyRoom2.jpg',
        '/assets/images/DeerValleyLoft.jpg'],
      airbnb: 'https://airbnb.com/h/deervalleyhome',
      vrbo: 'https://www.vrbo.com/9369594ha?noDates=true&unitId=8441295',
      buttonTextAirbnb: 'Rent Me On AirBnB!',
      buttonTextVrbo: 'Rent Me On VRBO!',
    },
    { name: 'Majestic Circle',
      location: 'Branson, MO',
      description: 'Coming Soon! New construction 4 bedroom 4 bathroom property with Table Rock Lake views! ' +
        'Features an open floor plan living area with full kitchen, two car garage, a game/movie room, ' +
        'incredible deck with outdoor activities, ' +
        'and a hot tub! ' +
        'There is also a neighborhood pool with a hot tub and a trail that takes you down to the water! Available for rent 2023!',
      images: ['assets/images/MajesticRendering.jpg', 'assets/images/Majestic.png'],
      airbnb: '',
      vrbo: '',
      buttonText: ''
    }
  ];

  showArrows = window.innerWidth > 920;
  slidesPerView = window.innerWidth > 920 ? 2 : 1;
  disableInteraction = false;

  constructor(public breakpoint: BreakpointObserver) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.slidesPerView = window.innerWidth > 920 ? 2 : 1;
    this.showArrows = window.innerWidth > 920;
  }

  ngOnInit() {
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev(300);
  }

  slideNext() {
    this.swiper.swiperRef.slideNext(300);
  }
}
