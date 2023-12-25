import React from "react";

export default function DropdownComponent() {
  return (
    <div className="mb-3 mx-2">
      <label
        htmlFor="categories"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6"
      >
        Categories
      </label>
      <select
        id="categories"
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Playboy</option>
        <option>Sugar daddy</option>
        <option>Jigolo</option>
        <option>PhP developer</option>
      </select>
      {""}
      <label
        htmlFor="city"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6"
      >
        City
      </label>
      <select
        id="city"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Baku</option>
        <option>Hovsan</option>
        <option>Vinland</option>
        <option>Asgard</option>
      </select>
      {""}
      <label
        htmlFor="Salary"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6"
      >
        Salary
      </label>
      <select
        id="Salary"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>500m</option>
        <option>10000m</option>
        <option>20000m</option>
        <option>1000m</option>
      </select>
      {""}
      <label
        htmlFor="Education"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6"
      >
        Education
      </label>
      <select
        id="Education"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>280</option>
        <option>Kollec</option>
        <option>Adnsu</option>
        <option>Biznes men</option>
      </select>
      {""}
      <label
        htmlFor="Work experience"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6"
      >
        Work experience
      </label>
      <select
        id="Work experience"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>None</option>
        <option>Espiri bulamadim</option>
        <option>usendim ya da</option>
        <option>Bilemezsin</option>
      </select>
      {""}
      <label
        htmlFor="Work hour"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-6"
      >
        Work hours
      </label>
      <select
        id="Work hour"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>None</option>
        <option>Half-time</option>
        <option>Full-time</option>
      </select>
    </div>
  );
}
