import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      "Liliane",
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2019, 1, 14)
    ),
    new Quote(
      " Rose",
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
      "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others",
      new Date(2019, 1, 14)
    ),
    new Quote(
      "Eleanor",
      "After climbing a great hill, one only finds that there are many more hills to climb.",
      "And as we let our own light shine, we unconsciously give other people permission to do the same",
      new Date(2019, 1, 14)
    ),
    new Quote(
      " Divine",
      "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living",
      "A good head and a good heart are always a formidable combination",
      new Date(2019, 1, 14)
    ),
    new Quote(
      "Omega",
      "And as we let our own light shine, we unconsciously give other people permission to do the same",
      "A good head and a good heart are always a formidable combination",
      new Date(2019, 1, 14)
    ),
    new Quote(
      "Robyn",
      "I can hear the roar of women's silence",
      "he who feeds you, controls you",
      new Date(2019, 1, 10)
    )
  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    // let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    // quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  ngOnInit() {}
}
