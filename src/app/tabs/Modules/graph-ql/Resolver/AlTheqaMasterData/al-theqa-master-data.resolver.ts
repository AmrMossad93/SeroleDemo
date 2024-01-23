import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {MasterDataService} from "../../Services/MasterData/master-data.service";
import {ApolloQueryResult} from "@apollo/client";
import {IAlTheqaMasterData} from "../../DTO/AlTheqaMasterData/al-theqa-master-data";

@Injectable({
  providedIn: 'root'
})
export class AlTheqaMasterDataResolver implements Resolve<ApolloQueryResult<IAlTheqaMasterData[]>> {
  constructor(private masterDataService: MasterDataService) {
  }

  resolve(): Observable<ApolloQueryResult<IAlTheqaMasterData[]>> {
    return this.masterDataService.getAltheqaMasterDataList()
  }
}
