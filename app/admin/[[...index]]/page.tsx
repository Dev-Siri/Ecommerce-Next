"use client";
import { NextStudio } from "next-sanity/studio";

import type { PageComponent } from "@/types";

import config from "@/sanity.config";

const AdminStudio: PageComponent = () => <NextStudio config={config} />;

export default AdminStudio;
