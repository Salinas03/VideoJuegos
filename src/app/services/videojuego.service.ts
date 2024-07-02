import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,map,Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  baseUri:string = 'https://backendvideojuegos.onrender.com/api';
  headers = new HttpHeaders().set('Content-Type','application/json');


  constructor(private http:HttpClient) { }

  // Método para agregar un Videojuego
  agregarVidejuego(data):Observable<any>{
    let url = `${this.baseUri}/agregar`
    return this.http.post(url, data).pipe(catchError(this.errorManager));
  }


  // Método para obtener todos los videojuegos
  getVideojuegos(){
    let url = `${this.baseUri}/videojuegos`
    return this.http.get(url);
  }

  // Método para obtener un videojuego por su ID
  getVideojuego(id):Observable<any>{
    let url = `${this.baseUri}/videojuego/${id}`
    return this.http.get(url,{headers: this.headers})
      .pipe(map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorManager)
    );
  }

  // Método para actualizar  un videojuego
  updateVideojuego(id,data): Observable<any>{
    let url = `${this.baseUri}/actualizar/${id}`
    return this.http.put(url,data,{headers: this.headers}).pipe(catchError(this.errorManager));
  }

  // Método para borrar un videjuego
  deleteVideojuego(id): Observable<any>{
    let url = `${this.baseUri}/eliminar/${id}`;
    return this.http.delete(url, {headers: this.headers}).pipe(catchError(this.errorManager));
  }

  errorManager(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      // Obtenemos el error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Obtenemos el error del lado del serVer
      errorMessage = `Error: ${error.status} Mensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  
}