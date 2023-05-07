export interface MovieProps {
  title: string;
  id: string;
  poster_path:string;
  release_date:string;
  [key: string]: any; // Add index signature
}
