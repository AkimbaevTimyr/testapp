export function addCity(cityName: string){
    console.log(cityName)
    const cities: any = [cityName]
    localStorage.setItem('cities', cityName)
    const data: any = JSON.parse(localStorage.getItem('cities') || "")
    console.log(data)
}