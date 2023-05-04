import { Component, Input, OnInit } from '@angular/core';

interface carouselCards {
  header: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  public carouselCards: carouselCards[] = [
    {
      header: 'Bots Up',
      description: 'Create chatbots for WhatsApp & Website without any coding',
    },
    {
      header: 'TDS Payments',
      description: 'Automate all your TDS tax payments.'

    },
    {
      header: 'Open Store',
      description: 'take your business online',
    },
    {
      header: 'Payout Links ',
      description: " Don't have the account numbers of your vendor? Now payout to your vendors by just using email/mobile number"

    },
    {
      header: 'Expense Cards',
      description: 'take your business online',
    },
  ]
  public indicators?: boolean;
  public controls?: boolean;
  public autoSlide?: boolean;

  public selectedIndex = 0
  constructor() { }

  ngOnInit(): void {
    if (!this.autoSlide) {
      this.autoslideCard();
    }
  }
  public selectCard(index: number) {
    this.selectedIndex = index
  }
  public onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.carouselCards.length - 1;
    }
    else {
      this.selectedIndex--;
    }
  }
  public onNextClick() {
    if (this.selectedIndex === this.carouselCards.length - 1) {
      this.selectedIndex = 0
    }
    else {
      this.selectedIndex++;
    }

  }
  public autoslideCard() {
    setInterval(() => {
      this.onNextClick();
    }, 3000)
  }
}
