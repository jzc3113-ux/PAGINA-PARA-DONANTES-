"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultRoleId, roleOptions, roleStorageKey } from "../../data/mock";

export type RoleOption = (typeof roleOptions)[number];

export function useRole() {
  const [roleId, setRoleId] = useState(defaultRoleId);

  useEffect(() => {
    const stored = window.localStorage.getItem(roleStorageKey);
    if (stored) {
      setRoleId(stored);
    }
  }, []);

  const role = useMemo(
    () => roleOptions.find((option) => option.id === roleId) ?? roleOptions[0],
    [roleId]
  );

  const saveRole = (nextRoleId: string) => {
    setRoleId(nextRoleId);
    window.localStorage.setItem(roleStorageKey, nextRoleId);
  };

  return { roleId, role, saveRole };
}
