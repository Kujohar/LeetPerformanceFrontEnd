import data from '../assets/LeetCodeData-2023-03-06.json';

function LatestAnswered() {
    let LatestTen = []
    data.forEach(item => {
        if (item.status_display == "Accepted") {
            LatestTen.push(item)
        }
    })
    // console.log(LatestTen)

    const dataOrganizer = (submissionItem) => {
        return (
            <tr key={submissionItem.id}>
                <th>{submissionItem.title}</th>
                <th>{submissionItem.runtime}</th>
                <th>{submissionItem.memory}</th>
                <th>{submissionItem.status_display}</th>
                <th>{submissionItem.title}</th>
                <th>{submissionItem.url}</th>
            </tr>
        )
    }


    const LatestSubTable = () => {

        let LatestTenTable = []
        LatestTen.forEach(item => {
            LatestTenTable.push(dataOrganizer(item))
        })

        return LatestTenTable
    }

    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>runtime</th>
                        <th>memory</th>
                        <th>Status</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <LatestSubTable />
                </tbody>
            </table>
        </div>
    )
}

export default LatestAnswered