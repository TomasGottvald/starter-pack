import React from 'react';
import { useQuery } from 'urql';
import { withUrqlClient } from 'next-urql';
import { useTranslation } from 'react-i18next';
import SsfwButton from '../components/forms/SsfwButton';
import CONFIG from '../config/global';

const Index = () => {
    const { t } = useTranslation();

    const [result] = useQuery({
        query: `
            query categories {
                categories {
                    uuid
                    name
                }
            }
            `,
    });

    function CategoryList() {
        if (result.fetching) {
            return <>{t('Loading')}...</>;
        } else if (result.error) {
            return (
                <>
                    {t('Oh no! Error')} - {result.error.message}
                </>
            );
        } else if (result.data) {
            return (
                <ul>
                    {result.data.categories.map(({ uuid, name }) => (
                        <li key={uuid}>{name}</li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    return (
        <>
            <h1>{t('List of categories')}</h1>
            <CategoryList />
            <div>
                <SsfwButton name="button1">{t('Default')}</SsfwButton>
                <SsfwButton name="button2" additionalClassName="btn--primary">
                    {t('Primary')}
                </SsfwButton>
                <SsfwButton name="button3" additionalClassName="btn--secondary">
                    {t('Secondary')}
                </SsfwButton>
            </div>
        </>
    );
};

export default withUrqlClient(() => ({
    url: CONFIG.API_URL,
}))(Index);
