mod doggle;
mod random;

use doggle::*;
use std::{cell::RefCell};
use wasm_bindgen::prelude::*;

use crate::random::random_range;

const BREEDS: [&'static str; 96] = ["doberman", "groenendael", "malamute", "akita", "cockapoo", "pug", "finnish", "pomeranian", "sheepdog", "keeshond", "collie", "boxer", "malinois", "setter", "terrier", "hound", "cotondetulear", "mountain", "pekinese", "germanshepherd", "redbone", "husky", "otterhound", "rottweiler", "vizsla", "beagle", "bluetick", "clumber", "schipperke", "briard", "ovcharka", "shiba", "dane", "shihtzu", "frise", "wolfhound", "buhund", "newfoundland", "corgi", "airedale", "chow", "affenpinscher", "borzoi", "komondor", "kuvasz", "lhasa", "mix", "pinscher", "retriever", "cattledog", "chihuahua", "springer", "dingo", "maltese", "kelpie", "weimaraner", "labrador", "labradoodle", "schnauzer", "papillon", "sharpei", "dhole", "entlebucher", "bullterrier", "australian", "poodle", "puggle", "eskimo", "basenji", "samoyed", "pointer", "saluki", "appenzeller", "coonhound", "leonberg", "pitbull", "waterdog", "pembroke", "spaniel", "whippet", "pyrenees", "brabancon", "dalmatian", "bouvier", "deerhound", "mastiff", "stbernard", "dachshund", "african", "mexicanhairless", "greyhound", "havanese", "bulldog", "elkhound", "ridgeback", "tervuren"];

thread_local! {
  static DOGGLE: RefCell<Doggle>
    = RefCell::new(Doggle::new(get_breed()));
}

#[wasm_bindgen(js_name = getState)]
pub fn get_state() -> String {
    DOGGLE.with(|dgl| dgl.borrow().to_string())
}

#[wasm_bindgen(js_name = getAnswer)]
pub fn get_answer() -> String {
    DOGGLE.with(|dgl| dgl.borrow_mut().get_answer())
}

#[wasm_bindgen(js_name = submitGuess)]
pub fn submit_guess(row: usize) -> usize {
    DOGGLE.with(|dgl| dgl.borrow_mut().submit_guess(row))
}

#[wasm_bindgen(js_name = typeLetter)]
pub fn type_letter(row: usize, col: usize, character: char) -> () {
    DOGGLE.with(|dgl| dgl.borrow_mut().change_tile((row, col), TileResult::Empty(character)))
}

#[wasm_bindgen(js_name = checkGameOver)]
pub fn check_game_over() -> bool {
    DOGGLE.with(|dgl| dgl.borrow_mut().check_game_over())
}

pub fn get_breed() -> &'static str {
    BREEDS[random_range(0, BREEDS.len())]
}
