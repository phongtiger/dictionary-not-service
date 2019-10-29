import { Component, OnInit } from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'}
  ];
  private word: IWord;

  constructor() { }

  ngOnInit() {
  }
  search(word: string) {
    const w = this.words.find(item => item.key === word.toLowerCase());
    let meaning;
    if (w) {
      meaning = w.meaning
    } else {
      meaning = 'Not found';
    }
    this.word = {
      key: word,
      meaning: meaning
    };
  }
}
