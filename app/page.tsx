"use client";

import ListView from "@/components/screens/listView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12 min-h-screen">
      <Tabs
        defaultValue="List"
        className="flex flex-col items-center w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="List">List</TabsTrigger>
          <TabsTrigger value="Charts">Charts</TabsTrigger>
        </TabsList>
        <TabsContent value="List">
          <ListView />
        </TabsContent>
        <TabsContent value="Charts">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
