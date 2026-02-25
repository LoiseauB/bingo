import {
  resetCards,
  setCardChecked,
  setCardsNumber,
  setCardTitle,
  setIsPlaying,
} from "@/store/features/bingoSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import clsx from "clsx";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import tiger from "@/assets/tiger_icon.svg";

const Bingo = () => {
  const { cards, cardsNumber, isPlaying } = useAppSelector(
    (state) => state.bingo,
  );
  const dispatch = useAppDispatch();

  const handleTitle = (index: number, title: string) => {
    if (title.length <= 0) return;
    dispatch(setCardTitle({ index, title }));
  };

  const handleSize = (value: number) => {
    dispatch(setCardsNumber({ cardsNumber: value }));
  };

  const handleCheck = (index: number) => {
    if (!isPlaying) return;
    dispatch(setCardChecked({ index }));
  };

  return (
    <section className="size-full flex flex-col items-center gap-10">
      {!isPlaying && (
        <Select onValueChange={(value) => handleSize(Number(value))}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Taille de la grille" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="9">3x3</SelectItem>
              <SelectItem value="16">4x4</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
      <section
        className={clsx(
          "grid 2xl:w-4/12 aspect-square bg-secondary gap-1 p-1",
          {
            "grid-cols-4": cardsNumber === 16,
            "grid-cols-3": cardsNumber === 9,
          },
        )}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative text-wrap overflow-clip bg-background p-2 flex flex-wrap justify-center items-center"
            onClick={() => handleCheck(index)}
            style={{
              backgroundImage: card.isChecked ? `url(${tiger})` : "",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {isPlaying ? (
              <p
                className={clsx("text-center font-semibold", {
                  "text-2xl": card.title.length <= 11,
                  "text-md": card.title.length > 16,
                })}
              >
                {card.title}
              </p>
            ) : (
              <textarea
                className="size-full text-center"
                onBlur={(e) => handleTitle(index, e.target.value)}
              />
            )}
          </div>
        ))}
      </section>
      <div className="flex flex-col gap-6">
        {!isPlaying && (
          <Button size="lg" onClick={() => dispatch(setIsPlaying())}>
            Let's go !
          </Button>
        )}
        <Button
          variant="link"
          onClick={() => {
            dispatch(resetCards());
          }}
        >
          Nouveau bingo
        </Button>
      </div>
    </section>
  );
};

export default Bingo;
