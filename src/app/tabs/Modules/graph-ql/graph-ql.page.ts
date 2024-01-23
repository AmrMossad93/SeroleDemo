import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {ApolloQueryResult} from "@apollo/client";
import {IAlTheqaMasterData} from "./DTO/AlTheqaMasterData/al-theqa-master-data";

@Component({
  selector: 'app-graph-ql',
  templateUrl: './graph-ql.page.html',
  styleUrls: ['./graph-ql.page.scss'],
})
export class GraphQLPage implements OnInit {
  environment = environment.production
  data: ApolloQueryResult<IAlTheqaMasterData[]> = {} as ApolloQueryResult<IAlTheqaMasterData[]>
  itemList: IAlTheqaMasterData[] = []

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.activatedRoute.data.subscribe(res => {
      this.data = res['masterData'];
      // @ts-ignore
      this.itemList = this.data.data['mstAltheqaGenericEntity']
    })
  }

}
