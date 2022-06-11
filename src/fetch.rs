extern crate reqwest_wasm;

use std::error::Error;
use std::collections::HashMap;
use crate::random::random_range;

struct Breeds {
    message: HashMap<String, Vec<String>>,
    status: String,
}

struct BreedImage {
    message: String,
    status: String,
}

// fn fetch_single_breed() -> &'static str {
//     let breed_list = fetch_breeds().unwrap();
//     let rand_num = rand::thread_rng().gen_range(0..breed_list.len());
//     let breed = move |breed_list: Vec<String>| { &breed_list[rand_num]};
//     breed(breed_list)
// }

#[wasi_tokio::main]
async fn fetch_breed() ->  Result<String, Box<dyn Error>> {
    let body = reqwest_wasm::get("https://dog.ceo/api/breeds/list/all")
      .await?
      .json::<Breeds>()
      .await?;

    let breeds: Vec<String> = body.message.into_keys().collect();
    let rand_num = random_range(0, breeds.len());
    Ok(String::from(&breeds[rand_num]))
}

#[wasi_tokio::main]
async fn fetch_breed_image(breed: String) -> Result<String, Box<dyn Error>> {
    let get_breed_url = format!("https://dog.ceo/api/breed/{}/images/random", breed);
    let body = reqwest_wasm::get(get_breed_url)
      .await?
      .json::<BreedImage>()
      .await?;
    
    Ok(body.message)
}