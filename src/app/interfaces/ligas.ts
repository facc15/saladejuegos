export interface Ligas {
  country_key: number;
  country_logo: string;
  country_name: string;
  league_key: number;
  league_logo: string;
  league_name: string;
}

export interface LigasResponse{
  result: Ligas[];
  total_pages: number;
  total_results: number;
}
