import {Injectable} from '@angular/core';
import {GraphQLService} from "../../../../../Core/Service/GraphQL/graph-ql.service";
import {AT_MASTER} from "../../../../../Core/DTO/Query/Queries";
import {Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";
import {IAlTheqaMasterData} from "../../DTO/AlTheqaMasterData/al-theqa-master-data";

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(private graphQLService: GraphQLService) {
  }

  getAltheqaMasterDataList(): Observable<ApolloQueryResult<IAlTheqaMasterData[]>> {
    return this.graphQLService.get(AT_MASTER)
  }
}
