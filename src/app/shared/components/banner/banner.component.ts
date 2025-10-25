import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {SwiperOptions} from 'swiper/types';
import {NgStyle} from '@angular/common';
import {IBanner} from '../../models/banner.model';
import {SwiperDirective} from '../../directives/swiper.directive';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  imports: [SwiperDirective, NgStyle],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef;
  private swiperInstance!: Swiper;

  // Swiper Settings
  public config: SwiperOptions = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 40,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1.1,
      },
    },
  };

  public slides: IBanner[] = [
    {
      title: 'Heading 1',
      subtitle: 'Integer euismod so lorem eu pretium',
      description:
        'Praesent finibus, eros quis facilisis<br> egestas, velit tortor auctor nulla',
      image: './images/slide-1.png',
      bgColor: '#ceebd5',
      id: 1,
    },
    {
      title: 'Heading 2',
      subtitle: 'Integer euismod so lorem eu pretium',
      description:
        'Praesent finibus, eros quis facilisis<br> egestas, velit tortor auctor nulla',
      image: './images/slide-2.png',
      bgColor: '#ffdc62',
      id: 2,
    },
    {
      title: 'Heading 3',
      subtitle: 'Integer euismod so lorem eu pretium',
      description:
        'Praesent finibus, eros quis facilisis<br> egestas, velit tortor auctor nulla',
      image: './images/slide-2.png',
      bgColor: '#58320552',
      id: 3,
    },
    {
      title: 'Heading 4',
      subtitle: 'Integer euismod so lorem eu pretium',
      description:
        'Praesent finibus, eros quis facilisis<br> egestas, velit tortor auctor nulla',
      image: './images/slide-2.png',
      bgColor: '#ffdc62',
      id: 4,
    },
  ];

  ngAfterViewInit(): void {
    this.swiperInstance = this.swiper.nativeElement.swiper;
  }

  public goNext(): void {
    this.swiperInstance?.slideNext();
  }

  public goPrev(): void {
    this.swiperInstance?.slidePrev();
  }

  public onKeyUp(event: KeyboardEvent, direction: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      if (direction === 'next') {
        this.goNext();
      } else if (direction === 'prev') {
        this.goPrev();
      }
    }
  }
}
