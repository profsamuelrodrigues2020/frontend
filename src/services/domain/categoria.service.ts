import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CategoriaDto } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService {
    constructor(public http: HttpClient) {

    }

    findAll(): Observable<CategoriaDto[]> {
        return this.http.get<CategoriaDto[]>(`${API_CONFIG.baseUrl}/categorias`);
    }

}
