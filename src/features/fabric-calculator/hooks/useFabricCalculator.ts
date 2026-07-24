// features/fabric-yardage/hooks/useFabricCalculator.ts

"use client";

import { useCallback, useMemo, useState } from "react";

import { calculateFabric } from "../lib/calculator";

import {
  FabricCalculatorState,
  FabricTypeId,
  ProjectId,
  SizeId,
  SleeveId,
  Unit,
  UseFabricCalculatorReturn,
} from "../types";

const DEFAULT_STATE: FabricCalculatorState = {
  project: "dress",

  size: "m",

  sleeve: "long",

  fabricType: "woven",

  fabricWidth: 44,

  allowance: 10,

  unit: "yards",
};

export function useFabricCalculator(): UseFabricCalculatorReturn {
  const [state, setState] = useState<FabricCalculatorState>(DEFAULT_STATE);

  const result = useMemo(() => {
    return calculateFabric(state);
  }, [state]);

  const setProject = useCallback((value: ProjectId) => {
    setState((prev) => ({
      ...prev,
      project: value,
    }));
  }, []);

  const setSize = useCallback((value: SizeId) => {
    setState((prev) => ({
      ...prev,
      size: value,
    }));
  }, []);

  const setSleeve = useCallback((value: SleeveId) => {
    setState((prev) => ({
      ...prev,
      sleeve: value,
    }));
  }, []);

  const setFabricType = useCallback((value: FabricTypeId) => {
    setState((prev) => ({
      ...prev,
      fabricType: value,
    }));
  }, []);

  const setFabricWidth = useCallback((value: number) => {
    setState((prev) => ({
      ...prev,
      fabricWidth: value,
    }));
  }, []);

  const setAllowance = useCallback((value: number) => {
    setState((prev) => ({
      ...prev,
      allowance: value,
    }));
  }, []);

  const updateField = useCallback(
    <K extends keyof FabricCalculatorState>(
      key: K,
      value: FabricCalculatorState[K],
    ) => {
      setState((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const setUnit = useCallback((value: Unit) => {
    setState((prev) => ({
      ...prev,
      unit: value,
    }));
  }, []);

  const reset = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  return {
    state,

    result,

    updateField,

    setProject,

    setSize,

    setSleeve,

    setFabricType,

    setFabricWidth,

    setAllowance,

    setUnit,

    reset,
  };
}
