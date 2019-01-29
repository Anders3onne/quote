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
      1,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      2,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      3,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      4,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      5,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      6,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
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
}
