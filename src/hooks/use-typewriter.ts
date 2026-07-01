import { useEffect, useState } from "react";

export const useTypewriter = (titles: readonly string[], startDelayMs = 800) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titles[0]) {
        setCurrentTitle(titles[0][0]);
      }
    }, startDelayMs);

    return () => clearTimeout(timer);
  }, [startDelayMs, titles]);

  useEffect(() => {
    const currentText = titles[titleIndex];
    if (!currentText) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentTitle.length < currentText.length) {
        timeout = setTimeout(() => {
          setCurrentTitle(currentText.slice(0, currentTitle.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else if (currentTitle.length > 0) {
      timeout = setTimeout(() => {
        setCurrentTitle(currentTitle.slice(0, -1));
      }, 30);
    } else {
      const nextIndex = (titleIndex + 1) % titles.length;
      setIsDeleting(false);
      setTitleIndex(nextIndex);
      timeout = setTimeout(() => {
        const nextTitle = titles[nextIndex];
        if (nextTitle) {
          setCurrentTitle(nextTitle[0]);
        }
      }, 50);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentTitle, isDeleting, titleIndex, titles]);

  return currentTitle;
};
