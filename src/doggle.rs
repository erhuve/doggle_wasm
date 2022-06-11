use std::{
    fmt::{Display, Write}, char,
};

// row, col
pub type Position = (usize, usize);

#[derive(Clone, Debug)]
pub enum TileResult {
    Empty(char),
    Gray(char),
    Yellow(char),
    Green(char),
}

#[derive(Clone, Debug, PartialEq)]
pub enum GameStatus {
    Playing = 0,
    Victory = 1,
    Defeat = 2,
}

#[derive(Debug)]
pub struct Doggle {
    answer: Vec<char>,
    max_guesses: usize,
    guesses: Vec<Vec<TileResult>>,
    submit_count: usize,
    game_status: GameStatus,
}

impl Display for Doggle {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        for guess in &self.guesses {
            for tile in guess {
                match tile {
                    TileResult::Empty(character) => f.write_str(&format!("{}#EMPTY ", *character))?,
                    TileResult::Gray(character) => f.write_str(&format!("{}#GRAY ", *character))?,
                    TileResult::Yellow(character) => f.write_str(&format!("{}#YELLOW ", *character))?,
                    TileResult::Green(character) => f.write_str(&format!("{}#GREEN ", *character))?,
                }
            }
            f.write_char('\n')?;
        }
        Ok(())
    }
}

impl Doggle {
    pub fn new(breed: &str) -> Doggle {
        let length = breed.len();
        const MAX_GUESSES: usize = 6;
        let guesses = vec![vec![TileResult::Empty(' '); length]; MAX_GUESSES];
        Doggle {
            answer: breed.chars().collect(),
            max_guesses: MAX_GUESSES,
            guesses,
            submit_count: 0,
            game_status: GameStatus::Playing,
        }
    }

    pub fn get_answer(&mut self) -> String {
        self.answer.iter().collect()
    }

    pub fn change_tile(&mut self, (row, col): Position, tile: TileResult) -> () {
        self.guesses[row][col] = tile;
    }

    pub fn submit_guess(&mut self, row: usize) -> usize {
        let mut correct_count = 0;
        // TODO IF I FEEL LIKE IT: Add thread sleeping so I can play an animation
        for col in 0..self.guesses[row].len() {
            match self.guesses[row][col] {
                TileResult::Empty(guessed_letter) => {
                    if self.answer[col] == guessed_letter {
                        self.guesses[row][col] = TileResult::Green(guessed_letter);
                        correct_count += 1;
                    } else if self.answer.contains(&guessed_letter) {
                        self.guesses[row][col] = TileResult::Yellow(guessed_letter);
                    } else {
                        self.guesses[row][col] = TileResult::Gray(guessed_letter);
                    }
                },
                _ => (),
            };
        }
        self.submit_count += 1;
        if correct_count == self.guesses[row].len() {
            self.game_status = GameStatus::Victory;
        } else if self.submit_count == self.max_guesses {
            self.game_status = GameStatus::Defeat;
        }

        correct_count
    }

    pub fn check_game_over(&mut self) -> bool {
        self.game_status != GameStatus::Playing
    }

}
