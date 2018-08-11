import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.scss']
})
export class DreamsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  public scroll; 
  public sections = 4;

  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
   })
  }



   text1 = "During my service in GLZ radio i have established their Podcasts Department. As part of my work as editor and producer I've created the “Dreams” - “חלומות” podcast. Short radio stories episodes that reveal the realms we enter at night. I made 30 episodes that have been heard more than 50,000 times"
   text2=" You can listen to an episode in English to understand a bit more about the project. (Headphones are advised) "
   text3=" In addition to the episodes I designed each of them an individual banner that catches the visual essence of the dream"

   title4="A Croc Under the Bed"
   text4="A nightly battle between a sleepy boy and the crocodile under his bed."

   title5="Lion In The Alley";
   text5="The israeli poet Rony Somek shared a childhood memory of a beloved alley that came to life in his dream."

   title6 = "A Soldiers Decision";
   text6="As a parting gesture from GLZ radio I recorded my own dream into an episode. In the dream I am a heroic soldier who is called to save the day by slaying the mighty evil whale that's attacking Tel Aviv shores. I return victorious but quickly realise I've been fed false information and have been used as a marionette. "
}
