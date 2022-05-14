import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/Card";
import Button from "../components/Button";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Parent = () => {
  const count = useSelector((store) => store.counter.value);
  console.log("newCnt", count);
  return (
    <div>
      <h1>{count}</h1>
      <Child />
    </div>
  );
};

const Child = () => {
  const dispatch = useDispatch();
  const plusCount = () => {
    dispatch(increment());
  };
  const minusCount = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <Button onClick={minusCount}>-</Button>;
      <Button onClick={plusCount}>+</Button>;
    </div>
  );
};

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className="container">
        <Card>
          <div>Hello Redux Count</div>
          <Parent />
          <Link href="/feedback">feedback으로 이동</Link>
        </Card>
      </main>
    </div>
  );
}
