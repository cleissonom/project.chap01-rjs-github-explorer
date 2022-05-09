import { useEffect, useState } from 'react';
import "../styles/repositories.scss";
import { RepositoryItem } from './RepositoryItem';

type RepositoryListTypes = {
   name: string;
   description: string;
   html_url: string;
   id: number;
}

export function RepositoryList() {
   const [repositories, setRepositories] = useState<RepositoryListTypes[]>([]);

   useEffect(() => {
      fetch('https://api.github.com/orgs/rocketseat/repos')
         .then(response => response.json())
         .then(data => setRepositories(data))
         .catch(error => console.log(error));
   }, [])

   return (
      <section className="repository-list">
         <h1>Lista de repositórios</h1>

         <ul>
            {
               repositories.map((repository) => (
                  <RepositoryItem key={repository.id} repository={repository} />
               ))
            }
         </ul>

      </section>
   );
}