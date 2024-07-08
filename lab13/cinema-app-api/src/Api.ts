import {Film} from "./Components/catalog/catalogItem/Film";

interface AuthResponse {
    data: {
        token: string;
    };
}

async function getAuthToken(): Promise<string | null> {
    const loginUrl = "https://api4.thetvdb.com/v4/login";
    const credentials = {
        "apikey": "5b7c0729-1158-4bde-b74d-414012369750",
    };

    try {
        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });

        const data: AuthResponse = await response.json();

        if (response.ok) {
            console.log(data.data.token);
            return data.data.token;
        } else {
            console.error("Ошибка аутентификации:", data);
            return null;
        }
    } catch (error) {
        console.error("Ошибка аутентификации:", error);
        return null;
    }
}

async function fetchFilms(authToken: string, filmType: string): Promise<any | undefined> {
    const moviesUrl = `https://api4.thetvdb.com/v4/${filmType}`;// series, movies
    try {
        const response = await fetch(moviesUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка запроса. Код ответа: ${response.status}`);
        }

        const data:any = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при запросе данных о фильмах:", error);
    }
}

let authToken:string|null = null;
let movies:any[] = [];
let series:any[] = [];

async function loadMovies() {
    if(!authToken)
        authToken = await getAuthToken();
    if (authToken) {
        const moviesData = await fetchFilms(authToken,'movies');
        if(moviesData) {
            movies = moviesData.data;
        }
    } else {
        console.log("Не удалось получить токен аутентификации.");
    }
}

async function loadSeries() {
    if(!authToken)
        authToken = await getAuthToken();
    if (authToken) {
        const seriesData = await fetchFilms(authToken,'series');
        if(seriesData) {
            series = seriesData.data;
        }
    } else {
        console.log("Не удалось получить токен аутентификации.");
    }
}

function check(substring: string, targetString: string): boolean {
    const regex:RegExp = new RegExp(substring, 'i');
    return regex.test(targetString);
}

function search(list:any[], str:string){
    const newList:any[] = [];
    for (const item of list) {
        if (check(str, item.name)){
            newList.push(new Film(item.id, item.name, "https://www.thetvdb.com"+item.image, item.year, item.status.recordType));
        }
    }
    return newList;
}

async function FindFilm(str:string, type:string){
    let moviesData:any[] = [];
    let seriesData:any[] = [];
    if(movies.length === 0)
        await loadMovies();
    if(series.length === 0)
        await loadSeries();
    if(type === "all")
    {
        seriesData = search(series, str);
        moviesData = search(movies, str);
    }
    else if(type === "movies")
        moviesData = search(movies, str);
    else if(type === "series")
        seriesData = search(series, str);
    console.log(seriesData);
    console.log(moviesData);
    return moviesData.concat(seriesData);
}

export {FindFilm, loadMovies};