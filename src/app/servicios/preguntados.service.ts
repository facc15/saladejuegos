import { LigasResponse } from '../interfaces/ligas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ligas } from '../interfaces/ligas';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

private rutaBarcelona: string ='https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=97&APIkey=5c4447043f9ca1d33845f518d54416d5a4e2cb09b86d1523588c35368845de16';
private rutaCristiano: string = 'https://apiv2.allsportsapi.com/football/?&met=Players&playerId=103051168&APIkey=5c4447043f9ca1d33845f518d54416d5a4e2cb09b86d1523588c35368845de16';
private rutaLigas: string= 'https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=5c4447043f9ca1d33845f518d54416d5a4e2cb09b86d1523588c35368845de16';
private rutaInglaterra: string ='https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=16&APIkey=5c4447043f9ca1d33845f518d54416d5a4e2cb09b86d1523588c35368845de16';
private rutaAlemania: string ='https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=21&APIkey=5c4447043f9ca1d33845f518d54416d5a4e2cb09b86d1523588c35368845de16';

constructor(private http: HttpClient)
{

}

traerAlemania()
{
  return this.http.get(this.rutaAlemania);
}

traerCristiano()
{
  return this.http.get(this.rutaCristiano);
}

traerBarcelona()
{
  return this.http.get(this.rutaBarcelona);
}

traerInglaterra()
{
  return this.http.get(this.rutaInglaterra);
}


  traerLigas(): Observable<Ligas[]>
  {
    return this.http.get<LigasResponse>(this.rutaLigas).pipe( map((res)=>res.result));

  }





}
